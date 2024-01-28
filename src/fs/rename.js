import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const rename = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const sourceFile = path.join(basePath, "files/wrongFilename.txt");
  const renamedFile = path.join(basePath, "files/properFilename.md");

  if (!fs.existsSync(sourceFile) || fs.existsSync(renamedFile))
    throw new Error("FS operation failed");

  await fs.promises.rename(sourceFile, renamedFile);
};

await rename();
