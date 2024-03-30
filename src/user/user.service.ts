import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import ResponseCode, { response } from 'src/domain/response';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/config/prisma/prisma.service';
export type User = any;
@Injectable()
export class UserService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
  ) {}

  async getUser(): Promise<response> {
    const data = await this.prismaService.user.findMany();
    return ResponseCode.success(data);
  }

  //nhớ try catch
  async getInfo(body: {token:string}): Promise<response> {
    const payload= this.jwtService.decode(body.token);
    const data = await this.prismaService.user.findFirst({where : {user_id : payload.user_id}});
    return ResponseCode.success(data);
  }
}
