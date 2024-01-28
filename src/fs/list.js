import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const list = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const sourcePath = path.join(basePath, "files");

  if (!fs.existsSync(sourcePath)) throw new Error("FS operation failed");

  const files = await fs.promises.readdir(sourcePath);

  for (const file of files) {
    console.log(file);
  }
};

await list();
