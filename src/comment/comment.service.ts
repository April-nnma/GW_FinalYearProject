// import { Injectable, NotFoundException } from '@nestjs/common';
// import { PrismaService } from 'src/config/prisma/prisma.service';
// import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

// @Injectable()
// export class CommentService {
//   constructor(private prisma: PrismaService) {}

//   async createComment(
//     userId: number,
//     postId: number,
//     createCommentDto: CreateCommentDto,
//   ) {
//     const { message, fullnameComment } = createCommentDto;
//     let commentFullname = fullnameComment;

//     if (!commentFullname) {
//       // If fullnameComment is not provided, retrieve the fullname of the user from the database
//       const user = await this.prisma.user.findUnique({
//         where: { user_id: userId },
//       });
//       if (!user) {
//         throw new NotFoundException('User not found');
//       }
//       commentFullname = user.fullname;
//     }

//     return this.prisma.comment.create({
//       data: {
//         user_id: userId,
//         post_id: postId,
//         message,
//         fullname_comment: commentFullname,
//       },
//     });
//   }
//   async updateComment(commentId: number, updateCommentDto: UpdateCommentDto) {
//     const comment = await this.prisma.comment.findUnique({
//       where: { comment_id: commentId },
//     });
//     if (!comment) {
//       throw new NotFoundException('Comment not found');
//     }
//     return this.prisma.comment.update({
//       where: { comment_id: commentId },
//       data: updateCommentDto,
//     });
//   }

//   async deleteComment(commentId: number) {
//     const comment = await this.prisma.comment.findUnique({
//       where: { comment_id: commentId },
//     });
//     if (!comment) {
//       throw new NotFoundException('Comment not found');
//     }
//     return this.prisma.comment.delete({ where: { comment_id: commentId } });
//   }

//   async getAllComments(postId: number) {
//     const comments = await this.prisma.comment.findMany({
//       where: { post_id: postId },
//     });

//     if (!comments || comments.length === 0) {
//       return [];
//     }

//     return comments;
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/config/prisma/prisma.service';
import { CreateCommentDto, UpdateCommentDto } from './dto/comment.dto';

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}

  async createComment(
    userId: number,
    postId: number,
    createCommentDto: CreateCommentDto,
  ) {
    const { message, fullnameComment } = createCommentDto;

    if (!fullnameComment) {
      const user = await this.prisma.user.findUnique({
        where: { user_id: userId },
      });
      if (!user) {
        throw new NotFoundException('User not found');
      }
      const fullname_comment = user.fullname; 
      return this.prisma.comment.create({
        data: {
          user_id: userId,
          post_id: postId,
          message,
          fullname_comment: fullname_comment,
        },
      });
    }

    return this.prisma.comment.create({
      data: {
        user_id: userId,
        post_id: postId,
        message,
        fullname_comment: fullnameComment, // Đổi tên trường thành fullname_comment
      },
    });
  }

  async updateComment(commentId: number, updateCommentDto: UpdateCommentDto) {
    const comment = await this.prisma.comment.findUnique({
      where: { comment_id: commentId },
    });
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    return this.prisma.comment.update({
      where: { comment_id: commentId },
      data: updateCommentDto,
    });
  }

  async deleteComment(commentId: number) {
    const comment = await this.prisma.comment.findUnique({
      where: { comment_id: commentId },
    });
    if (!comment) {
      throw new NotFoundException('Comment not found');
    }
    return this.prisma.comment.delete({ where: { comment_id: commentId } });
  }

  async getAllComments(postId: number) {
    const comments = await this.prisma.comment.findMany({
      where: { post_id: postId },
    });

    if (!comments || comments.length === 0) {
      return [];
    }

    return comments;
  }
}
