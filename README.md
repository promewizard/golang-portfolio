# Portfolio Project

Welcome to my portfolio project! This project demonstrates my skills in deploying a full-fledged application consisting of multiple microservices. Using Next.js for the frontend, Go for backend microservices, and MongoDB as the database, this project showcases my proficiency in orchestrating the deployment process using cloud-native technologies and best practices.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project aims to showcase my DevOps skills by orchestrating the deployment process of a full-fledged application with multiple microservices. The frontend, backend microservices, and database components are seamlessly integrated and deployed using cloud-native technologies.

## Features

- **Responsive Design**: The frontend is designed to be responsive, providing an optimal viewing experience across various devices and screen sizes.
- **Dynamic Data Rendering**: The backend API fetches data from MongoDB and serves it to the frontend, enabling dynamic rendering of portfolio content such as projects, skills, and contact information.
- **Authentication and Authorization (optional)**: Secure authentication and authorization mechanisms can be implemented to restrict access to certain parts of the portfolio.
- **Scalable Architecture**: The project architecture is designed to be scalable, allowing for easy expansion and addition of new features in the future.

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies for both the frontend and backend:
   ```bash
   cd frontend
   npm install
   cd ../backend
   go mod tidy
   ```
4. Set up the MongoDB database and create a .env file in backend folder.
   ```bash
   echo "MONGOURI=<MONGODB_CONNECTION_STRING>" >> .env
   ```
6. Start the frontend and backend servers:
   ```bash
   cd frontend
   npm run dev
   cd ../backend
   go run main.go
   ```
7. Access the application in your web browser at `http://localhost:3000`.

## Usage

Once the application is running, you can navigate through the various pages of the portfolio to view different sections such as projects, skills, and contact information. The frontend communicates with the backend API to fetch and display dynamic data from the MongoDB database.

## Technologies Used

- **Frontend**: Next.js
- **Backend**: Go (Golang)
- **Database**: MongoDB
- **Deployment**: Google Cloud Run, Terraform, GitHub Actions

## Deployment

This project is deployed using Google Cloud Run. Deployment is automated using Terraform for infrastructure provisioning and GitHub Actions for continuous integration and deployment.

### Steps for Deployment:

1. Configure your Google Cloud credentials and project.
2. Set up a MongoDB instance on Google Cloud or use an existing one.
3. Create a Terraform configuration to define the Cloud Run service, networking, and IAM policies.
4. Set up GitHub Actions workflows to build and deploy the application automatically on every push to the main branch.

## Contributing

Contributions are welcome! If you have any suggestions, bug fixes, or feature implementations, feel free to open an issue or create a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your requirements.
