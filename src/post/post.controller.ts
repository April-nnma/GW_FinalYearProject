import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './entities/post.entities';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('getPost')
  getPost() {
    return this.postService.getPost();
  }

  @Post('createPost')
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }
}
