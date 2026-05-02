import express from "express";
import cors from "cors";
import notificationRoutes from "./routes/notificationRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/notifications", notificationRoutes);

export default app;
