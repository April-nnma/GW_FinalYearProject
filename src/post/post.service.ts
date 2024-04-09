import {
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import ResponseCode from 'src/domain/response';
import { createPostDto } from 'src/types/post.type';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);
  constructor(private prisma: PrismaService) {}

  async getPost() {
    try {
      const posts = await this.prisma.post.findMany();
      return ResponseCode.success(posts, HttpStatus.OK, 'success');
    } catch (error) {
      return ResponseCode.failed('Failed to retrieve posts');
    }
  }

  async createPost(createPostDto: createPostDto) {
    const { user_id_create, title, contentUrl } = createPostDto;
    // Check if user exists
    try {
      const userExists = await this.prisma.user.findUnique({
        where: { user_id: user_id_create },
      });

      if (!userExists) {
        this.logger.error(`User with ID ${user_id_create} not found`);
        throw new NotFoundException(`User with ID ${user_id_create} not found`);
      }

      // Create new post

      const post = await this.prisma.post.create({
        data: {
          user_id_create,
          title,
          content_url: contentUrl,
        },
      });
      // this.logger.log(`New post created with ID ${post.post_id}`);
      this.logger.log(`New post created: ${JSON.stringify(post, null, 2)}`);
      return ResponseCode.success(
        post,
        HttpStatus.OK,
        'Post created successfully',
      );
    } catch (error) {
      this.logger.log(`Failed to create post: ${error.message}`);
      return ResponseCode.failed('Failed to create post');
    }
  }
}
