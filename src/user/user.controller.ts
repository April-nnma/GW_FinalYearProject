import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import express from 'express';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UseGuards(AuthGuard)
  @Get('getUser')
  getUser(@Request() req) {
    //return this.userService.getUser();
    return req.user;
  }

  @Post('register')
  async register(@Body() user: any) {
    console.log(user);
    return this.userService.register(user);
  }

  @Post('login')
  async login(@Body() user) {
    return this.userService.login(user);
  }
}
