import { Request, Response } from "express";
import userService from "../services/userService";

export class UserController {
  // Create a new user
  async createUser(req: Request, res: Response): Promise<void> {
    const { name, email } = req.body;
    try {
      const user = await userService.createUser(name, email);
      res.status(201).json(user);
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred";
      res.status(500).json({ message: errorMessage });
    }
  }

  // Get a user by ID
  async getUserById(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const user = await userService.getUserById(Number(id));
      res.status(200).json(user);
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred";
      res.status(404).json({ message: errorMessage });
    }
  }

  // Get all users
  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred";
      res.status(500).json({ message: errorMessage });
    }
  }

  // Update a user by ID
  async updateUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const updateData = req.body;
    try {
      const user = await userService.updateUser(Number(id), updateData);
      res.status(200).json(user);
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred";
      res.status(404).json({ message: errorMessage });
    }
  }

  // Delete a user by ID
  async deleteUser(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const message = await userService.deleteUser(Number(id));
      res.status(200).json({ message });
    } catch (error) {
      const errorMessage = (error as Error).message || "An error occurred";
      res.status(404).json({ message: errorMessage });
    }
  }
}

export default new UserController();
