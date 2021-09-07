import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return 'hello world on azure';
  }
}
