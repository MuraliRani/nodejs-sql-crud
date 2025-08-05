# Node.js SQL CRUD Application

A RESTful API built with Node.js, Express, and MySQL using Sequelize ORM for database operations.

## Features

- RESTful API endpoints for user management
- MySQL database integration with Sequelize ORM
- Environment-based configuration
- Structured MVC architecture
- Automatic database synchronization

## Project Structure

```
nodejs-sql-crud/
├── config/
│   └── db.config.js          # Database configuration
├── controllers/
│   └── user.controller.js     # User business logic
├── models/
│   ├── index.js              # Sequelize initialization
│   └── user.model.js         # User model definition
├── routes/
│   └── user.routes.js        # User API routes
├── app.js                    # Main application file
├── package.json              # Project dependencies
└── README.md                 # Project documentation
```

## Prerequisites

- Node.js (v14 or higher)
- MySQL database
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/nodejs-sql-crud.git
cd nodejs-sql-crud
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with your database configuration:
```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database_name
DB_PORT=3306
PORT=3000
```

4. Create the MySQL database:
```sql
CREATE DATABASE your_database_name;
```

5. Start the application:
```bash
npm start
```

The server will start on `http://localhost:3000`

## API Endpoints

### Users

- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

### Example Request

```bash
# Create a new user
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }'
```

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MySQL** - Database
- **Sequelize** - ORM for database operations
- **dotenv** - Environment variable management
- **body-parser** - Request body parsing middleware

## Development

To run the application in development mode with auto-restart:

```bash
npm start
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 