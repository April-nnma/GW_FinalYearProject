import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('postData')
  postData(@Body() data: any): string {
    console.log('Received data:', data);
    return 'Data received successfully';
  }
}
