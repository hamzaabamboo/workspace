import { last } from "lodash";
import { FileType } from "../generated/prisma";
export const getFileType = (filename: string): FileType => {
  const ext = last(filename.split("."));
  switch (ext) {
    case "jpg":
    case "jpeg":
    case "png":
      return "IMAGE";
    case "pdf":
    case "docx":
      return "DOCUMENT";
    default:
      return "OTHER";
  }
};
