import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './config/prisma/prisma.service';
import { PostModule } from './post/post.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, AuthModule, PostModule],
  providers: [PrismaService],
})
export class AppModule {}
