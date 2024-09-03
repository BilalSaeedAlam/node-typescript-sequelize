import express, { Application } from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import db from "../models"; // Adjust path to your models directory if necessary

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use("/api/users", userRoutes);

// Function to start the server
const startServer = async () => {
  try {
    await db.sequelize.sync();
    console.log("Database connected and models synchronized.");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

// Start the server
startServer();

export default app;
