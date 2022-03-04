import {
  Controller,
  Post,
  Get,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private salesService: SalesService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('record')
  async upload(@UploadedFile() file: Express.Multer.File): Promise<string> {
    console.log(file);
    this.salesService.parse(file.filename);
    return 'File uploaded successfully';
  }

  @Get('report')
  fetch(): string {
    return 'Report Fetched';
  }
}
