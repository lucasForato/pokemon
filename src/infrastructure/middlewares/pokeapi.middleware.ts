import { HttpService } from '@nestjs/axios';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { AxiosError } from 'axios';
import { NextFunction, Request, Response } from 'express';
import { catchError, firstValueFrom } from 'rxjs';
import { PokeApiResponse } from '../types/PokeApiResponse';

const API_PREFIX = 'api/v1/';

@Injectable()
export class PokeApiMiddleware implements NestMiddleware {
  constructor(private readonly httpService: HttpService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const url = req.originalUrl.slice(API_PREFIX.length + 1); // +1 to remove the leading slash

    if (!url.includes('pokemon')) {
      return res.status(HttpStatus.BAD_REQUEST).send('This URL is invalid');
    }

    const pokeapiUrl = `https://pokeapi.co/api/v2/${url}`;

    try {
      const { data } = await firstValueFrom(
        this.httpService.get<PokeApiResponse>(pokeapiUrl).pipe(
          catchError((error: AxiosError) => {
            throw new HttpException(
              error.message,
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }),
        ),
      );

      req['pokemonData'] = data.abilities;

      next();
    } catch (error) {
      return res
        .status(HttpStatus.INTERNAL_SERVER_ERROR)
        .send('Failed to fetch data from PokeAPI');
    }
  }
}
