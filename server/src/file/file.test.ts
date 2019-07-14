import { createReadStream, existsSync, unlinkSync, readFileSync } from "fs";
import { join } from "path";
import { uploadFile } from "./uploadFile";
describe("uploadFile", () => {
  it("should upload new file", async () => {
    const originalFile = join(__dirname, "./test.txt");
    const stream = createReadStream(originalFile);
    const filename = "newFile.txt";
    const newFilename = await uploadFile({ stream, filename }, __dirname);
    expect(newFilename).toEqual(filename);
    const path = join(__dirname, `./${filename}`);
    expect(existsSync(path)).toBeTruthy();
    expect(readFileSync(originalFile)).toEqual(readFileSync(path));
    unlinkSync(path);
  });
});
