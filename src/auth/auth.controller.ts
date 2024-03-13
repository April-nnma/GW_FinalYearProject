import { Body, Controller, Post, HttpCode, HttpStatus, Get, Request, UseGuards, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto, registerDto } from 'src/types/user.type';
import { AuthGuard } from './auth.guard';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() logInDto: loginDto) {
   
    return this.authService.logIn(logInDto);
  }

  @Post('register')
  async register(@Body() registerUserDto: registerDto,@Res() response:Response) {
    
    return this.authService.register(registerUserDto,response);
  }
  
  @UseGuards(AuthGuard)
  @Get('profile')
  async profile(@Request() req) {
    return req.user
  }
}
