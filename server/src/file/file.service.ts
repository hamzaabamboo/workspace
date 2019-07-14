import { FileUpload } from "../types";
import { uploadFile } from "./uploadFile";
import { join } from "path";
import * as shortid from "shortid";
import { FileCreateWithoutCardInput } from "../generated/prisma";
import { getFileType } from "./getFileType";
const directory = join(__dirname, "../../uploads");

class FileService {
  async processSingleFile(
    file: FileUpload
  ): Promise<FileCreateWithoutCardInput> {
    const { createReadStream, filename } = await file;
    const stream = createReadStream();
    const name = `${shortid.generate()}-${filename}`;
    const result = await uploadFile(stream, name, directory);
    const type = getFileType(filename);
    return { filename: result, type };
  }

  processMultipleFiles(
    files: FileUpload[]
  ): Promise<FileCreateWithoutCardInput[]> {
    return Promise.all(files.map(this.processSingleFile));
  }
}

export default FileService;
