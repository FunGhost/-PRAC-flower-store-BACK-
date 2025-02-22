import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.services';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  sendMessage() {
    this.appService.sendMessage('Hello World!');
    return 'Message sent';
  }
}
