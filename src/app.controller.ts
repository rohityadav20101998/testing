import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/create')
  create(@Body() data: any): any {
    return this.appService.create(data);
  }
}
