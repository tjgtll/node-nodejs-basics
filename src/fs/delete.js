import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const remove = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url));
  const fileToRemove = path.join(basePath, "files/fileToRemove.txt");

  if (!fs.existsSync(fileToRemove)) throw new Error("FS operation failed");

  await fs.promises.unlink(fileToRemove);
};

await remove();
