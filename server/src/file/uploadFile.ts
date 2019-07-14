import { createWriteStream, ReadStream } from "fs";

interface UploadInput {
  stream: ReadStream;
  filename: string;
}

export const uploadFile = (
  { stream, filename }: UploadInput,
  directory: string
): Promise<string> => {
  const path = `${directory}/${filename}`;
  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on("error", reject)
      .on("finish", () => resolve(filename))
  );
};
