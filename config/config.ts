import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Define the environment keys as a type
type Environment = "development" | "test" | "production";

// Define the configuration type
interface DBConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: "postgres" | "mysql" | "sqlite" | "mariadb" | "mssql"; // Add your dialect type here
}

// Define the configuration object with a Record type
const config: Record<Environment, DBConfig> = {
  development: {
    username: process.env.DB_USERNAME || "default_username",
    password: process.env.DB_PASSWORD || "default_password",
    database: process.env.DB_DATABASE || "default_database",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
  test: {
    username: process.env.DB_USERNAME || "default_username",
    password: process.env.DB_PASSWORD || "default_password",
    database: process.env.DB_DATABASE || "default_database",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USERNAME || "default_username",
    password: process.env.DB_PASSWORD || "default_password",
    database: process.env.DB_DATABASE || "default_database",
    host: process.env.DB_HOST || "127.0.0.1",
    dialect: "postgres",
  },
};
// Ensure that environment is correctly typed
const environment: Environment = (process.env.NODE_ENV as Environment) || "development";

// Export using CommonJS module.exports
module.exports = config[environment];
