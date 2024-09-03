# Node TypeScript Sequelize

A boilerplate Node.js application using TypeScript, Express, Sequelize, and PostgreSQL. This repository provides a robust starting point for building scalable and maintainable RESTful APIs with TypeScript, leveraging Sequelize as an ORM for database operations.

## Overview

This project aims to provide a solid foundation for developers to quickly set up and start developing server-side applications using Node.js and TypeScript. It includes essential features and configurations like environment management, database migrations, and seeders, making it ideal for production-ready applications.

## Features

- **TypeScript**: Strongly typed language support for better code quality and maintainability.
- **Express**: Lightweight and flexible web framework for building robust APIs.
- **Sequelize**: Powerful ORM for managing database operations with support for PostgreSQL.
- **dotenv**: Environment variable management to keep sensitive data secure.
- **Migrations and Seeders**: Built-in scripts for managing database schema and populating initial data.
- **Modular Structure**: Clear separation of concerns with services, controllers, and routes for easy scalability.
- **ESLint and Prettier**: Code quality and formatting tools to maintain a consistent codebase.
- **Jest**: Integrated testing framework for unit and integration tests.

## Project Structure

\`\`\`bash
/node-typescript-sequelize
|-- /src
| |-- app.ts # Main application entry point
| |-- /controllers # API controllers
| |-- /routes # API routes
| |-- /services # Business logic and service layer
|-- /models # Sequelize models
|-- /config # Configuration files
|-- /migrations # Database migration files
|-- /seeders # Database seeder files
|-- /dist # Compiled JavaScript output
|-- .env # Environment variables
|-- .gitignore # Git ignore file
|-- .sequelizerc # Sequelize CLI configuration
|-- package.json # Node.js dependencies and scripts
|-- tsconfig.json # TypeScript compiler options
|-- yarn.lock # Yarn lockfile
\`\`\`

## Getting Started

### Prerequisites

- Node.js (>= 14.x)
- Yarn (Package manager)
- PostgreSQL (Database)

### Installation

Clone the repository:

\`\`\`bash
git clone https://github.com/BilalSaeedAlam/node-typescript-sequelize.git
cd node-typescript-sequelize
\`\`\`

Install dependencies:

\`\`\`bash
yarn install
\`\`\`

### Configure Environment Variables

Create a `.env` file in the root directory and configure your environment variables as shown in the `.env.example` file.

### Build the project

Compile TypeScript files to JavaScript:

\`\`\`bash
yarn build
\`\`\`

### Run Migrations

Set up your database schema with Sequelize migrations:

\`\`\`bash
yarn migrate
\`\`\`

### Seed the Database

Populate the database with initial data:

\`\`\`bash
yarn seed
\`\`\`

### Start the Server

Start the application server:

\`\`\`bash
yarn start
\`\`\`

### Run in Development Mode

Alternatively, run the application in development mode with auto-reloading:

\`\`\`bash
yarn dev
\`\`\`

## Usage

The application is set up with a basic REST API structure for user management. You can expand the API by adding new routes, controllers, and services as needed.

## Contributing

Feel free to contribute by submitting issues, suggesting features, or creating pull requests. All contributions are welcome!

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

**If you like this project, please give a star to this repository!**
