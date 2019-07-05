import { environment } from "src/environments/environment";

export const getImageUrl = (file: string) => {
  const BACKEND_URL = environment.apiUrl + "uploads/slip/";
  return BACKEND_URL + file;
};
