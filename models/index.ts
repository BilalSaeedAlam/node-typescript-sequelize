import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize"; // Correctly import DataTypes
import config from "../config/config";

const basename = path.basename(__filename);
const db: any = {};

// Initialize Sequelize instance
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect as any, // Type assertion for dialect
  logging: console.log, // Optional: log SQL queries to the console
});

// Function to connect to the database
const connectToDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

// Connect to the database
connectToDatabase();

// Dynamically read all model files in the current directory
fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && // Exclude hidden files
      file !== basename && // Exclude the current file (index.ts)
      file.slice(-3) === ".ts" // Include only TypeScript files
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes); // Use DataTypes directly
    db[model.name] = model;
  });

// Set up associations if available
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
