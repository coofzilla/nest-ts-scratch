import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/hello')
  getHello() {
    return 'hi there';
  }

  @Get('/bye')
  getGoodbye() {
    return 'goodbye';
  }
}
