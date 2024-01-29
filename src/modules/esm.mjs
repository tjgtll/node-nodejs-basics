import os from "os";
import path, { dirname } from "path";
import { createServer } from "http";
import { fileURLToPath } from "url";
import "./files/c.js";

let unknownObject;

const PORT = 3000;
const filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(filePath);

if (Math.random() > 0.5) {
  import("./files/a.json", { assert: { type: "json" } }).then((module) => {
    unknownObject = module.default;
  });
} else {
  import("./files/b.json", { assert: { type: "json" } }).then((module) => {
    unknownObject = module.default;
  });
}

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${filePath}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServer((_, res) => {
  res.end("Request accepted");
});

setTimeout(() => console.log(unknownObject), 1000);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
