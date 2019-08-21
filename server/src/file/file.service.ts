import { Injectable } from '@nestjs/common';
import { FileUpload } from '../types';
import { FileCreateWithoutCardInput } from '../graphql';
import * as shortid from 'shortid';
import { join } from 'path';
import { ReadStream, createWriteStream } from 'fs';
import { FileType } from '../generated/prisma';

const directory = join(__dirname, '../../uploads');

@Injectable()
export class FileService {
  uploadFile = (
    stream: ReadStream,
    filename: string,
    directory: string,
  ): Promise<string> => {
    const path = `${directory}/${filename}`;
    return new Promise((resolve, reject) =>
      stream
        .pipe(createWriteStream(path))
        .on('error', reject)
        .on('finish', () => resolve(filename)),
    );
  };

  getFileType(filename: string): FileType {
    const ext = filename
      .split('.')
      .slice()
      .pop();
    switch (ext) {
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'IMAGE';
      case 'pdf':
      case 'docx':
        return 'DOCUMENT';
      default:
        return 'OTHER';
    }
  }

  async processSingleFile(
    file: FileUpload,
  ): Promise<FileCreateWithoutCardInput> {
    const { createReadStream, filename, ...rest } = await file;
    const stream = createReadStream();
    const name = `${shortid.generate()}-${filename}`;
    const result = await this.uploadFile(stream, name, directory);
    const type = this.getFileType(filename);
    return { filename: result, type, ...rest } as FileCreateWithoutCardInput;
  }

  processMultipleFiles(
    files: FileUpload[] = [],
  ): Promise<FileCreateWithoutCardInput[]> {
    return Promise.all(files.map(this.processSingleFile));
  }
}
