import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const config = {
  baseURL: process.env.BASE_URL,
  email: process.env.EMAIL,
  name: process.env.NAME,
  rollNo: process.env.ROLL_NO,
  githubUsername: process.env.GITHUB_USERNAME,
  accessCode: process.env.ACCESS_CODE,
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  token: process.env.TOKEN,
};

if (!config.baseURL) {
  console.warn("Warning: BASE_URL is not set in logging_middleware/.env");
}
