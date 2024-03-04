import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { DepartmentModule } from './department/department.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RoleModule, UserModule, DepartmentModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}