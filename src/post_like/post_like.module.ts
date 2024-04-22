import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLike } from './post_like.entity';
import { PostLikeController } from './post_like.controller';
import { PostLikeService } from './post_like.service';
import { PrismaService } from 'src/config/prisma/prisma.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostLike])],
  controllers: [PostLikeController],
  providers: [PostLikeService, PrismaService],
})
export class PostLikeModule {}
