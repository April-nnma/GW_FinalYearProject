import { Controller, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post(':userId/:postId')
  async createComment(
    @Param('userId') userId: string,
    @Param('postId') postId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    return this.commentService.createComment(
      +userId,
      +postId,
      createCommentDto,
    );
  }

  @Patch(':id')
  async updateComment(
    @Param('id') id: string,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    return this.commentService.updateComment(+id, updateCommentDto);
  }

  @Delete(':id')
  async deleteComment(@Param('id') id: string) {
    return this.commentService.deleteComment(+id);
  }
}
