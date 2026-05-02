import axios from "axios";
import { config } from "./config.js";
import { getAuthToken } from "./auth.js";

let cachedToken = null;

const getToken = async () => {
  if (!cachedToken) {
    cachedToken = await getAuthToken();
  }
  return cachedToken;
};

export const Log = async (stack, level, packageName, message) => {
  try {
    const token = await getToken();

    const response = await axios.post(
      `${config.baseURL}/logs`,
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    console.log("📡 Log sent:", level, "-", message);

    return response.data;
  } catch (error) {
    console.error("❌ Logging failed:", error.response?.data || error.message);
  }
};
