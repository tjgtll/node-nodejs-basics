import os from "os";
import { Worker } from "worker_threads";

const performCalculations = async () => {
  const numberOfCores = os.cpus().length;
  const workers = [];
  const results = Array(numberOfCores);

  for (let i = 0; i < numberOfCores; i++) {
    workers.push(
      new Promise((resolve) => {
        const worker = new Worker(new URL("./worker.js", import.meta.url));
        worker.postMessage(10 + i);

        worker.on("message", (result) => {
          results[i] = result;
          resolve();
        });

        worker.on("error", () => {
          results[i] = { status: "error", data: null };
          resolve();
        });
      })
    );
  }

  await Promise.all(workers);
  console.log(results);
};

await performCalculations();
