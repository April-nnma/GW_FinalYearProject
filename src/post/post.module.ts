import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { PrismaModule } from '../config/prisma/prisma.module';
import { HandleFile } from 'src/util/file.util';

@Module({
  imports: [PrismaModule, ConfigModule],
  controllers: [PostController],
  providers: [PostService, HandleFile],
})
export class PostModule {}
