import { dirname, join } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const create = async () => {
  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "fresh.txt"
  );

  try {
    await fs.promises.writeFile(filePath, "I am fresh and young", {
      flag: "wx",
    });
  } catch (e) {
    throw new Error("FS operation failed");
  }
};

await create();
