const isBrowser =
  typeof window !== "undefined" || typeof document !== "undefined";

let config = {
  baseURL: "",
  email: "",
  name: "",
  rollNo: "",
  githubUsername: "",
  accessCode: "",
  clientID: "",
  clientSecret: "",
  token: "",
};

if (!isBrowser) {
  const dotenv = await import("dotenv");
  const path = await import("path");
  const { fileURLToPath } = await import("url");

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  dotenv.config({ path: path.resolve(__dirname, "../.env") });

  config = {
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
}

export { config };
