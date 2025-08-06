# LIBRARY-MANAGEMENT-API

**COMPANY**: CODTECH IT SOLUTIONS

**NAME**: SANIA RAVINDRA GADE

**INTERN ID**: CT08DH308

**DOMAIN**: SOFTWARE DEVELOPMENT

**DURATION**: 8 WEEKS

**MENTOR**: NEELA SANTOSH

## DESCRIPTION OF TASK 

During the internship at Codtech IT Solutions, I worked on developing a Library Management RESTful API as part of the software development domain. The goal of this project was to create a functional and structured API using Node.js, Express.js, and MongoDB that can handle the CRUD operations necessary for managing books in a digital library system.

The first step in the project was to understand the structure of a RESTful API and how HTTP methods (GET, POST, PUT, DELETE) are used to interact with a backend server. I began by setting up the development environment with Node.js and Express and creating a MongoDB database to store book records. The API allows users to perform all essential operations such as creating a new book entry, retrieving all books, retrieving a specific book by ID, updating book details, and deleting a book.

The data model for books included fields like title, author, ISBN number, category, and available copies. I used Mongoose for defining the schema and for handling database operations. A key learning experience was understanding how to manage asynchronous operations in Node.js using async/await and try/catch blocks for error handling.

After setting up the routes, I tested each API endpoint using Postman. For example, a POST request to `/books` creates a new book, while a GET request to `/books` returns all books. I also created routes for `GET /books/:id`, `PUT /books/:id`, and `DELETE /books/:id`. These endpoints make it easy for library staff or systems to manage book inventories programmatically.

I also implemented validation and error handling to ensure the API responds with appropriate messages if a request fails or if a book is not found. For instance, if an invalid book ID is entered, the API returns a 400 Bad Request with a relevant error message. If a book is successfully deleted or updated, the API responds with a 200 OK status and confirmation message.

Another essential part of the project was documenting the API and ensuring it is understandable by other developers. I created an API documentation PDF that explains each route, its method, URL, expected input/output, and possible errors.

The most rewarding part of the internship was applying everything I learned in real-world development. I got hands-on experience working with Express routers, middleware, connecting to MongoDB, creating and testing APIs, and handling JSON data formats. I also gained a better understanding of how full-stack applications work by focusing on the server-side components.

This project has helped me build confidence in backend development and given me a clear understanding of how RESTful services work. The API I developed can serve as the backend for any library or educational institution and can be extended further to include user authentication, borrowing history, fine calculations, and more.

In conclusion, this internship allowed me to enhance both my technical and problem-solving skills. I now feel better prepared to take on software development tasks and contribute to real-world projects in the software industry.
