import { Body, Controller, Post, HttpCode, HttpStatus, Get, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { loginDto, registerDto } from 'src/types/user.type';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  logIn(@Body() logInDto: loginDto) {
    console.log(1)
    return this.authService.logIn(logInDto);
  }

  @Post('register')
  async register(@Body() registerUserDto: registerDto) {
    return this.authService.register(registerUserDto);
  }
  
  @UseGuards(AuthGuard)
  @Get('profile')
  async profile(@Request() req) {
    return req.user
  }
}
