import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const copy = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const sourcePath = path.join(basePath, "/files");
  const copyPath = path.join(basePath, "/files_copy");

  if (!fs.existsSync(sourcePath) || fs.existsSync(copyPath))
    throw new Error("FS operation failed");

  const files = await fs.promises.readdir(sourcePath);

  if (files) {
    for (const file of files) {
      const sourceFile = path.join(sourcePath, file);
      const copyFile = path.join(copyPath, file);
      await fs.promises.copyFile(sourceFile, copyFile);
    }
  }
};

await copy();
