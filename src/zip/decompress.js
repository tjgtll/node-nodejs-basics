import fs from "fs";
import zlib from "zlib";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const decompress = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const inputFile = path.join(basePath, "files/archive.gz");
  const outputFile = path.join(basePath, "files/fileToCompress.txt");

  const readStream = fs.createReadStream(inputFile);
  const writeStream = fs.createWriteStream(outputFile);
  const gunzip = zlib.createGunzip();

  readStream.pipe(gunzip).pipe(writeStream);

  writeStream.on("finish", () => {
    console.log("File was decompressed");
    fs.unlinkSync(inputFile);
  });
};

await decompress();
