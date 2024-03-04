//   async register(user: any): Promise<any> {
//     const hashedPassword = await bcrypt.hash(user.password, 10); // Hash mật khẩu trước khi lưu vào cơ sở dữ liệu
//     return await this.prisma.user.create({
//       data: {
//         first_name: user.first_name,
//         last_name: user.last_name,
//         email: user.email,
//         address: user.address,
//         gender: user.gender,
//         day_of_birth: user.day_of_birth,
//         role_id: user.role_id,
//         department_id: user.department_id,
//         password: hashedPassword,
//       },
//     });
//   }
// }
import { Prisma, PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
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
  async register(user: any): Promise<any> | undefined {
    return await this.prisma.user.findMany();
  }
  async login(user: any): Promise<any> {
    return await this.prisma.user.findMany();
  }
}
