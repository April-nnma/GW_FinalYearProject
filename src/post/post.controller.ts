import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { createPostDto } from 'src/types/post.type';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('getPost')
  getPost() {
    return this.postService.getPost();
  }

  @Post('createPost')
  createPost(@Body() createPostDto: createPostDto) {
    return this.postService.createPost(createPostDto);
  }
}
