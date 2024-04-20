import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './config/prisma/prisma.service';
import { PostModule } from './post/post.module';
import { ReactModule } from './react/react.module';
import { PostLikeModule } from './post_like/post_like.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLike } from './post_like/post_like.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    AuthModule,
    PostModule,
    ReactModule,
    PostLikeModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'gwfinal',
      entities: [PostLike],
      synchronize: true,
    }),
  ],
  providers: [PrismaService],
})
export class AppModule {}
