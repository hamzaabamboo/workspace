import { createWriteStream, ReadStream } from "fs";

export const uploadFile = (
  stream: ReadStream,
  filename: string,
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
