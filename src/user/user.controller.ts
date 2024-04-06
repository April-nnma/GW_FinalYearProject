import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthGuard } from 'src/auth/jwt/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get('getUser')
  async getUser() {
    return this.userService.getUser();
  }

  @UseGuards(AuthGuard)
  @Post('getInfo')
  async getInfo(@Body() body: { token: string }) {
    return this.userService.getInfo(body);
  }

  // @Get('profile')
  // @UseGuards(AuthGuard)
  // async getUserByToken(@Request() req) {
  //   if (!req.user) {
  //     throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  //   }
  //   return this.userService.getUserByToken(req.user.userId);
  // }
}
