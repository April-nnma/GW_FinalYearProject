import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './config/prisma/prisma.service';
import { PostModule } from './post/post.module';
import { PostLikeModule } from './post_like/post_like.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLike } from './post_like/post_like.entity';
import { CommentModule } from './comment/comment.module';
import { Comment } from './comment/comment.entity';
import { StoryModule } from './story/story.module';

@Module({
  imports: [
    
    ConfigModule.forRoot(),
    AuthModule,
    UserModule,
    PostModule,
    PostLikeModule,
    CommentModule,
    StoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-1d631f1c-gokuhieu-72d6.d.aivencloud.com',
      port: 19401,
      username: 'avnadmin',
      password: 'AVNS_BCWGX9GoMZoZvLM2K1Y',
      database: 'defaultdb',
      entities: [PostLike, Comment],
      synchronize: true,
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
