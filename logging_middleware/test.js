import { Log } from "./src/logger.js";

const run = async () => {
  console.log("🚀 Testing logging...");

  await Log("backend", "info", "controller", "Logging middleware working");

  console.log("✅ Done");
};

run();
