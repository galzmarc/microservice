# Microservices Application with Go and React

This is a microservices-based application that shows a random Pokémon. The application consists of a backend written in Go and a frontend written in React. 
The application generates a random ID on the frontend, sends it to the backend, which queries the PokeAPI using that ID to retrieve a Pokemon's name and picture. The retrieved information is then sent back to the frontend for display. The communication between the frontend and backend is done through HTTP, with the backend listening on port 8080.

## Application Flow

1. The frontend generates a random ID.
2. The frontend sends the ID to the backend through an HTTP request.
3. The backend receives the ID, queries the PokeAPI using the ID, and retrieves the Pokemon's name and picture.
4. The backend sends the Pokemon's information back to the frontend through an HTTP response.
5. The frontend receives the information and displays it to the user.

## Running the Application

You can choose to run the application either with or without Docker.

### Prerequisites

Make sure you have the following dependencies installed on your system:

- Go (for running the backend)
- Node.js and npm (for running the frontend)
- Docker and Docker Compose (optional, for running the application with Docker)

### Running without Docker

To run the application without Docker, you will need to separately start the backend and frontend servers.

#### Backend Setup:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the backend directory:

   ```
   cd backend
   ```

3. Install the necessary dependencies:

   ```
   go mod download
   ```

4. Build and start the backend server:

   ```
   go run main.go
   ```

   This will start the backend server, which listens on port 8080.

#### Frontend Setup:

1. Navigate to the frontend directory:

   ```
   cd frontend
   ```

2. Install the necessary dependencies:

   ```
   npm install
   ```

3. Start the frontend server:

   ```
   npm start
   ```

   This will start the frontend server, which listens on port 3000.

4. Access the application in your browser:

   Open your browser and go to `http://localhost:3000` to access the frontend of the application.

### Running with Docker (optional)

If you prefer to run the application using Docker, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repository.git
   ```

2. Build the Docker images:

   - For the backend:

     ```
     cd backend
     docker build -t backend .
     ```

   - For the frontend:

     ```
     cd frontend
     docker build -t frontend .
     ```

3. Start the application using Docker Compose:

   ```
   docker-compose up
   ```

   This will start the frontend and backend services and handle the communication between them.

4. Access the application in your browser:

   Open your browser and go to `http://localhost:3000` to access the frontend of the application.

## Additional Notes

- Make sure the PokeAPI is accessible from your backend. If it's not reachable, you may need to configure network connectivity or use an alternative API.
- You can customize and extend the application as per your requirements by modifying the frontend and backend code.
