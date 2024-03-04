import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async logIn(
    email: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userService.register({
      email: email,
      password: password,
    });
    // if (!user) {
    //   throw new UnauthorizedException('Invalid email or password');
    // }
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   throw new UnauthorizedException('Invalid email or password');
    // }
    const payload = {
      sub: user.user_id,
      username: user.first_name,
      user: user.last_name,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
