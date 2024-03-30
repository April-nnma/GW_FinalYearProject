import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from 'src/config/prisma/prisma.module';

@Module({
  imports: [PrismaModule, ConfigModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
