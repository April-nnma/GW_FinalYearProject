import {
  BadRequestException,
  Injectable,
  Logger,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { loginDto, registerDto } from 'src/types/user.type';
import { PrismaService } from 'src/config/prisma/prisma.service';
import ResponseCode, { response } from 'src/domain/response';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}
  private logger = new Logger(AuthService.name);
  async logIn(loginDto: loginDto): Promise<response> {
    try {
      const { password, email } = loginDto;

      //check email
      const userCheck = await this.prismaService.user.findFirst({
        where: { email: email },
      });
      if (!userCheck)
        throw new BadRequestException(ResponseCode.failed('Email not found'));
      //check password
      const matchPass = await bcrypt.compare(password, userCheck.password);
      if (!matchPass)
        throw new BadRequestException(ResponseCode.failed('password mismatch'));
      delete userCheck.password;

      return ResponseCode.success({
        token: await this.jwtService.signAsync(userCheck),
      });
    } catch (err) {
      throw new BadRequestException();
    }
  }

  async register(
    registerUserDto: registerDto,
    @Res() responses: Response,
  ): Promise<Response> {
    try {
      const { email, password, fullname, date_of_birth } = registerUserDto;
      const checkUser = await this.prismaService.user.findFirst({
        where: { email: email },
      });
      console.log(ResponseCode.failed('email is exist'));
      if (checkUser)
        return responses
          .status(400)
          .send(ResponseCode.failed('email is not exist'));

      const saltOrRounds = 10;
      const hashPass = await bcrypt.hash(password, saltOrRounds);

      const userCreate = await this.prismaService.user
        .create({
          data: {
            fullname: fullname,
            email,
            password: hashPass,
            date_of_birth: date_of_birth,
          },
        })
        .then(async (result) => {
          return result;
        });
      if (!userCreate) return responses.status(400).send(ResponseCode.failed());
      return responses.status(200).send(
        ResponseCode.success({
          token: await this.jwtService.signAsync(userCreate),
        }),
      );
    } catch (err) {
      throw new BadRequestException();
    }
  }
  async logOut(): Promise<{ message: string }> {
    return { message: 'Please discard your authentication token.' };
  }
}
