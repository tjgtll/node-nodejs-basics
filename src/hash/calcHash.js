import fs from "fs";
import crypto from "crypto";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const calculateHash = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const inputFilePath = path.join(basePath, "files/fileToCalculateHashFor.txt");

  const readStream = fs.createReadStream(inputFilePath);
  const hash = crypto.createHash("sha256");

  readStream.pipe(hash).setEncoding("hex");

  hash.on("finish", () => {
    console.log("SHA256 Hash:", hash.read());
  });
};

await calculateHash();
