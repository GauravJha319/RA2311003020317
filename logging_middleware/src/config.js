import dotenv from "dotenv";

dotenv.config();

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
  console.warn("Warning: BASE_URL is not set in .env");
}
