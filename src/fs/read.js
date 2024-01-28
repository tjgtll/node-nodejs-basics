import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const read = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fileToReadPath = path.join(basePath, "files/fileToRead.txt");

  if (!fs.existsSync(fileToReadPath)) throw new Error("FS operation failed");

  const fileContent = await fs.promises.readFile(fileToReadPath, "utf8");
  console.log(fileContent);
};

await read();
