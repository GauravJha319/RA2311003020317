console.log("CONTROLLER RUNNING NEW CODE");

import { fetchNotifications } from "../services/notificationService.js";
import { Log } from "../../../logging_middleware/src/logger.js";

export const getNotifications = async (req, res) => {
  try {
    const data = await fetchNotifications();

    console.log("✅ Sending response:", data);

    // Log success
    await Log(
      "backend",
      "info",
      "controller",
      "Notifications fetched successfully",
    );

    res.json(data);
  } catch (error) {
    console.error("❌ Controller error:", error.message);

    // Log error
    await Log("backend", "error", "controller", error.message);

    res.status(500).json({
      error: "Something went wrong while fetching notifications",
    });
  }
};
