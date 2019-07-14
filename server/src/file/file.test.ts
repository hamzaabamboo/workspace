import { createReadStream, existsSync, unlinkSync, readFileSync } from "fs";
import { join } from "path";
import { uploadFile } from "./uploadFile";
import { getFileType } from "./getFileType";

describe("uploadFile", () => {
  it("should upload new file", async () => {
    const originalFile = join(__dirname, "./test.txt");
    const stream = createReadStream(originalFile);
    const filename = "newFile.txt";
    const newFilename = await uploadFile(stream, filename, __dirname);
    expect(newFilename).toEqual(filename);
    const path = join(__dirname, `./${filename}`);
    expect(existsSync(path)).toBeTruthy();
    expect(readFileSync(originalFile)).toEqual(readFileSync(path));
    unlinkSync(path);
  });
});

describe("getFileType", () => {
  const expectType = (type: string) => (filename: string) =>
    expect(getFileType(filename)).toEqual(type);
  it("should return IMAGE", () => {
    const img = expectType("IMAGE");
    img("???.png");
    img("555.jpg");
    img("a.b.c.d.e.f.p.n.g.png");
    img("fff.jpeg");
  });

  it("should return DOCUMENT", () => {
    const doc = expectType("DOCUMENT");
    doc("asd.pdf");
    doc("aaaa.docx");
    doc("ggg.doge.docx");
  });

  it("should return OTHER", () => {
    const other = expectType("OTHER");
    other("asd.txt");
    other("abc.md");
    other("java.ts");
  });
});
