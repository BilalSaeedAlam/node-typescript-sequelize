import { Router } from "express";
import userController from "../controllers/userController";

const router = Router();

// Define routes for user operations
router.post("/", userController.createUser); // Create a new user
router.get("/:id", userController.getUserById); // Get a user by ID
router.get("/", userController.getAllUsers); // Get all users
router.put("/:id", userController.updateUser); // Update a user by ID
router.delete("/:id", userController.deleteUser); // Delete a user by ID

export default router;
