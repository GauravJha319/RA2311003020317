import axios from "axios";
import { config } from "./config.js";

// Register (ONLY RUN ONCE)
export const register = async () => {
  try {
    const response = await axios.post(`${config.baseURL}/register`, {
      email: config.email,
      name: config.name,
      mobileNo: "9" + Date.now().toString().slice(-9),
      githubUsername: config.githubUsername,
      rollNo: config.rollNo,
      accessCode: config.accessCode,
    });

    console.log("✅ Registration successful");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error(
      "❌ Registration failed:",
      error.response?.data || error.message,
    );
  }
};

// Get Auth Token
export const getAuthToken = async () => {
  try {
    const response = await axios.post(`${config.baseURL}/auth`, {
      email: config.email,
      name: config.name,
      rollNo: config.rollNo,
      accessCode: config.accessCode,
      clientID: config.clientID,
      clientSecret: config.clientSecret,
    });

    console.log("✅ Token generated");

    return response.data.access_token;
  } catch (error) {
    console.error("❌ Auth failed:", error.response?.data || error.message);
  }
};
