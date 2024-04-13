import { extname } from 'path';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';

// export const multerConfig = {
//   dest: process.env.UPLOAD_LOCATION,
// };

export const MulterOptions = {
  // limits: {
  //   fileSize: Math.pow(3024, 2), // 1MB
  // },
  // // Check the mimetypes to allow for upload
  // fileFilter: (req: any, file: any, cb: any) => {
  //   if (file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
  //     cb(null, true);
  //   } else {
  //     cb(
  //       new HttpException(
  //         `Unsupported file type ${extname(file.originalname)}`,
  //         HttpStatus.BAD_REQUEST,
  //       ),
  //       false,
  //     );
  //   }
  // },
  storage: diskStorage({
    destination: './uploads/img',
    // eslint-disable-next-line prettier/prettier
    filename: (req: any, file: any, callback: any) => {
      callback(null, generateFilename(file));
    },
  }),
};

function generateFilename(file: { originalname: string }) {
  return `${uuidv4()}.${extname(file.originalname)}`;
}
