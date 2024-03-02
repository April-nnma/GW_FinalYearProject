import { Prisma, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
export type User = any;
@Injectable()
export class UserService {
  prisma = new PrismaClient();
  // getUser() {
  //   let data = this.prisma.user.findMany();
  //   return data;
  // }
  constructor() {
    this.prisma = new PrismaClient();
  }
  async getUser() {
    return await this.prisma.user.findMany();
  }
  async register(user: any): Promise<any> {
    return await this.prisma.user.create({
      data: {
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        address: user.address,
        gender: user.gender,
        day_of_birth: user.day_of_birth,
        role_id: user.role_id,
        department_id: user.department_id,
        password: user.password, // chưa check
      },
    });
  }
  // async login(user: any): Promise<any> {
  //   const username = await this.prisma;
  // }
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
