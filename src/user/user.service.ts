import { Prisma, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  prisma = new PrismaClient();
  getUser() {
    let data = this.prisma.user.findMany();
    return data;
  }
}
