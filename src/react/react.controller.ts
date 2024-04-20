import { Controller } from '@nestjs/common';
import { ReactService } from './react.service';

@Controller('react')
export class ReactController {
  constructor(private readonly reactService: ReactService) {}
}
