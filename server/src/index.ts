import "./module-alias";

import { AddressInfo } from "net";
import { server } from "./server";
import express = require("express");

server.listen(process.env.PORT || 4000, () => {
  const { port } = server.address() as AddressInfo;
  console.log(`Server is running on http://localhost:${port}`);
  if (process.env.NODE_ENV !== "production") {
    // Do Something
  }
});
