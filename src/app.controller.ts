import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get('v1/:path')
  async handleAllRequests(@Req() req: Request, @Res() res: Response) {
    console.log('HELLO WORLD');
    return res.send('hello');
    // return 'hello'
  }
}
