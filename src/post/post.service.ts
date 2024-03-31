import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { createPostDto } from 'src/types/post.type';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPost() {
    return await this.prisma.post.findMany();
  }

  async createPost(createPostDto: createPostDto) {
    const { user_id_create, title } = createPostDto;

    // Kiểm tra xem user có tồn tại không
    const userExists = await this.prisma.user.findUnique({
      where: { user_id: user_id_create },
    });

    if (!userExists) {
      throw new NotFoundException(`User with ID ${user_id_create} not found`);
    }

    // Tạo post mới
    return await this.prisma.post.create({
      data: {
        user_id_create,
        title,
      },
    });
  }
}
