import { register } from "./src/auth.js";

const run = async () => {
  console.log("🚀 Starting registration...");

  await register();

  console.log("✅ Finished");
};

run();
