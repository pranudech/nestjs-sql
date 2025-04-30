# NestJS SQL Project

This is a backend project built with NestJS framework and SQL database integration, demonstrating best practices for building scalable and maintainable APIs.

## Features

- RESTful API endpoints
- SQL database integration
- Authentication and Authorization
- Data validation
- Error handling
- API documentation

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- MySQL or PostgreSQL database

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd nestjs-sql
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add the following:
```env
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USERNAME=your_username
DATABASE_PASSWORD=your_password
DATABASE_NAME=your_database_name
JWT_SECRET=your_jwt_secret
```

4. Start the development server:
```bash
npm run start:dev
# or
yarn start:dev
```

The application will be available at `http://localhost:3000`

## API Documentation

Once the application is running, you can access the Swagger API documentation at:
`http://localhost:3000/api`

## Project Structure

```
src/
├── controllers/     # Route controllers (controller layer)
├── services/       # Business logic (service layer)
├── entities/       # Database entities/models
├── dto/           # Data Transfer Objects
├── interfaces/    # TypeScript interfaces
├── middleware/    # Custom middleware
├── guards/        # Authentication/Authorization guards
└── main.ts        # Application entry point
```

## Testing

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support, please open an issue in the repository or contact the project maintainers. 