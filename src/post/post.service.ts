// import {
//   HttpStatus,
//   Injectable,
//   Logger,
//   NotFoundException,
// } from '@nestjs/common';
// import { PrismaService } from 'src/config/prisma/prisma.service';
// import ResponseCode from 'src/domain/response';
// import { createPostDto } from 'src/types/post.type';
// import { HandleFile } from 'src/util/file.util';

// @Injectable()
// export class PostService {
//   private readonly logger = new Logger(PostService.name);
//   constructor(
//     private prisma: PrismaService,
//     private handleFile: HandleFile,
//   ) {}

//   async getPost() {
//     try {
//       const posts = await this.prisma.post.findMany();
//       return ResponseCode.success(posts, 'success', HttpStatus.OK);
//     } catch (error) {
//       return ResponseCode.failed('Failed to retrieve posts');
//     }
//   }

//   async createPost(
//     createPostDto: createPostDto,
//     files: Array<Express.Multer.File>,
//   ) {
//     const { user_id_create } = createPostDto;

//     // Check if user exists
//     const userExists = await this.prisma.user.findUnique({
//       where: { user_id: Number(user_id_create) },
//     });

//     if (!userExists) {
//       this.logger.error(`User with ID ${user_id_create} not found`);
//       throw new NotFoundException(`User with ID ${user_id_create} not found`);
//     }

//     try {
//       const data: { user_id_create: number; content: string } = {
//         user_id_create: Number(user_id_create),
//         content: '',
//       };

//       if (files.length) {
//         const arrFile = this.handleFile.multipleBase64(files);
//         // Truncate content if it exceeds 255 characters
//         data.content = arrFile[0].slice(0, 255);
//       }

//       // Create new post
//       const post = await this.prisma.post.create({ data });
//       if (post) {
//         this.handleFile.DeleteFiles(files.map((file) => file.path));
//       }
//       this.logger.log(`New post created: ${JSON.stringify(post, null, 2)}`);
//       return ResponseCode.success(
//         post,
//         'Post created successfully',
//         HttpStatus.OK,
//       );
//     } catch (error) {
//       this.logger.error(`Failed to create post: ${error.message}`);
//       return ResponseCode.failed('Failed to create post');
//     }
//   }
// }
import {
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import ResponseCode from 'src/domain/response';
import { createPostDto } from 'src/types/post.type';
import { HandleFile } from 'src/util/file.util';

@Injectable()
export class PostService {
  private readonly logger = new Logger(PostService.name);
  constructor(
    private prisma: PrismaService,
    private handleFile: HandleFile,
  ) {}

  async getPost() {
    try {
      const posts = await this.prisma.post.findMany();
      return ResponseCode.success(posts, 'success', HttpStatus.OK);
    } catch (error) {
      return ResponseCode.failed('Failed to retrieve posts');
    }
  }

  async createPost(
    createPostDto: createPostDto,
    files: Array<Express.Multer.File>,
  ) {
    const { user_id_create, caption, content } = createPostDto;

    // Check if user exists
    const userExists = await this.prisma.user.findUnique({
      where: { user_id: Number(user_id_create) },
    });

    if (!userExists) {
      this.logger.error(`User with ID ${user_id_create} not found`);
      throw new NotFoundException(`User with ID ${user_id_create} not found`);
    }

    try {
      const data: { user_id_create: number; caption: string; content: string } =
        {
          user_id_create: Number(user_id_create),
          caption: caption || '',
          content: '',
        };

      // if (files.length) {
      //   const arrFile = this.handleFile.multipleBase64(files);
      //   data.content = arrFile[0];
      // } else if (content) {
      //   // Truncate text content if it exceeds 255 characters
      //   data.content = content.slice(0, 1000);
      // }
      if (files.length) {
        const arrFile = this.handleFile.multipleBase64(files);
        // Truncate content if it exceeds 255 characters
        data.content = arrFile[0].slice(0, 255);
      }

      // Create new post
      const post = await this.prisma.post.create({ data });
      if (post && files.length) {
        this.handleFile.DeleteFiles(files.map((file) => file.path));
      }
      this.logger.log(`New post created: ${JSON.stringify(post, null, 2)}`);
      return ResponseCode.success(
        post,
        'Post created successfully',
        HttpStatus.OK,
      );
    } catch (error) {
      this.logger.error(`Failed to create post: ${error.message}`);
      return ResponseCode.failed('Failed to create post');
    }
  }
}
