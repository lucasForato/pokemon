import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  handleGetRequests(@Req() req: Request, @Res() res: Response) {
    return 'Hello people'
  }
}
