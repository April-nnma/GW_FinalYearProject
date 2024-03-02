import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class DepartmentService {
  prisma = new PrismaClient();
  getDepartment() {
    let data = this.prisma.department.findMany();
    return data;
  }
}
