import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import express from 'express';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('getUser')
  getUser() {
    return this.userService.getUser();
  }

  @Post('register')
  async register(@Body() user:any) {
    console.log(user)
    return this.userService.register(user);
  }

  @Post('login')
  async login(@Body() user) {
    return this.userService.login(user);
  }
}
