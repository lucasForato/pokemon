import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('api/v1/pokemon/:name')
  async handlePokeApiRequests(@Req() req: Request, @Res() res: Response) {
    const response = await this.appService.filterAbilityNameFromPokemonData(
      req['pokemonData'],
    );
    return res.status(200).send(response);
  }
}
