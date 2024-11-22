# Fiverr Clone

Install NPM n both Backend and frandend and run together



A feature-rich Fiverr clone built using the **MERN stack** (MongoDB, Express.js, React.js, and Node.js). This project includes a fully functional backend and a dynamic frontend to simulate a freelance service marketplace.

---

## Features

- User Authentication (Sign Up, Log In)
- Job Postings by Sellers
- Job Search and Filtering
- Order Management (Placing and Viewing Orders)
- Payment Integration (Simulated)
- Real-time Notifications (Optional)
- Responsive Design

---

## Installation and Setup

Follow the steps below to set up the project on your local machine.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** and **npm** (or **yarn**)
- **MongoDB** (running locally or using a cloud provider like MongoDB Atlas)

---

### Step 1: Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/yourusername/sprint4-fiverr-main.git
```

## Step 1:  Install Dependencies

There are separate dependencies for the frontend and backend. You need to install both.

Install Backend Dependencies: Navigate to the backend directory and install the necessary packages:
```bash

cd backend
npm install 

```
Install Frontend Dependencies: Navigate to the frontend directory and install the necessary packages:
```bash

cd ../frontend
npm install 

```
## Step 2: Run the Backend Server

After installing dependencies for the backend, start the server by running the following commands:

```bash

cd backend
npm start

```

## Step 3: Run the Frontend

Now, navigate back to the frontend directory and start the React app:

```bash

cd ../frontend
npm start


```


## Technologies Used
- Frontend: React.js, React Router, Context API
- Backend: Node.js, Express.js
- Database: MongoDB
- Others: JWT for authentication, Concurrently for running frontend and backend, dotenv for environment variables

## Contribution
Contributions are welcome! To contribute:

1- Fork the repository
2 -Create a feature branch:

```bash

git checkout -b feature-name

```

3- Commit your changes:


```bash

git commit -m "Description of changes"


```
4-Push to the branch:
```bash

git push origin feature-name

```
5-Open a Pull Request.

## License
This project is licensed under the MIT License.

## Notes

- Ensure MongoDB is running before starting the backend.
- The application uses JWT for secure authentication; update the JWT_SECRET in your .env file for production.





