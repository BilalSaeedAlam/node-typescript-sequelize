import { User } from "../../models/user"; // Adjust the import path as necessary

export class UserService {
  // Create a new user
  async createUser(name: string, email: string) {
    try {
      const user = await User.create({ name, email });
      return user;
    } catch (error) {
      const errorMessage = (error as Error).message || "Unable to create user";
      throw new Error(errorMessage);
    }
  }

  // Get a user by ID
  async getUserById(id: number) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      return user;
    } catch (error) {
      const errorMessage = (error as Error).message || "Unable to retrieve user";
      throw new Error(errorMessage);
    }
  }

  // Get all users
  async getAllUsers() {
    try {
      const users = await User.findAll();
      return users;
    } catch (error) {
      const errorMessage = (error as Error).message || "Unable to retrieve users";
      throw new Error(errorMessage);
    }
  }

  // Update a user by ID
  async updateUser(id: number, updateData: Partial<{ name: string; email: string }>) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      await user.update(updateData);
      return user;
    } catch (error) {
      const errorMessage = (error as Error).message || "Unable to update user";
      throw new Error(errorMessage);
    }
  }

  // Delete a user by ID
  async deleteUser(id: number) {
    try {
      const user = await User.findByPk(id);
      if (!user) {
        throw new Error("User not found");
      }
      await user.destroy();
      return "User deleted successfully";
    } catch (error) {
      const errorMessage = (error as Error).message || "Unable to delete user";
      throw new Error(errorMessage);
    }
  }
}

export default new UserService();
