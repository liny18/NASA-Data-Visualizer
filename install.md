Vite + MERN Stack Project Installation Guide

This guide will help you set up a Vite + MERN (MongoDB, Express, React, Node.js) stack project. Follow the steps below to successfully install and configure your project.

Prerequisites:
Ensure you have the following software installed on your system:

    1.Node.js (v14.x or later): https://nodejs.org/en/download/
    2.npm (v6.x or later): Comes with Node.js
    3.MongoDB (v4.4 or later): https://www.mongodb.com/try/download/community
    4.Git (optional): https://git-scm.com/downloads

Installation:

    1.Clone the repository (skip this step if you're not using Git):
    git clone [https://github.com/yourusername/vite-mern-stack.git](https://github.com/RPI-ITWS/ITWS4500-S23-fluffyBarnacles)
    cd into the right directory
    Alternatively, download the repository as a ZIP file and extract it.

    2.Install the project dependencies:
    npm install
    3.Create a .env file in the project root folder, and add the following environment variables:
    MONGODB_URI=mongodb://localhost:27017/yourdbname
    PORT=3001
    Replace yourdbname with your desired database name.

    4.Start the MongoDB server:
    For Windows, open the Services application and start the MongoDB service.
    For macOS and Linux, open a terminal and run:
    sudo systemctl start mongod
    5.In the project root folder, start the backend server:
    npm run server
    6.In a separate terminal, navigate to the project root folder and start the Vite development server:
    arduino
    npm run dev
    7.Open your browser and visit http://localhost:3000. You should see the project up and running.

Building for Production

    To build the frontend for production, run the following command:
    npm run build
    The optimized production build will be generated in the dist folder.

Deployment

    To deploy the application, follow the deployment guidelines for your preferred hosting platform (e.g., Heroku, Vercel, Netlify, etc.). Don't forget to configure the necessary environment variables.

Happy coding!
