import { createUploadLink } from "apollo-upload-client";
import { environment } from "../../environments/environment";
// const uri = "/api/";
const uri = "http://192.168.1.115:6869/";

export const uploadLink = createUploadLink({
  uri: environment.apiUrl
});
