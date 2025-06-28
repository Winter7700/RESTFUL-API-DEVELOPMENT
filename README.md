# RESTFULL-API-DEVELOPMENT

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: SANKET SAVLERAM HOLKAR

*INTERN ID*: CT04DF2639

*DOMAIN*: SOFTWARE DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

##I developed a Library Management System as a full-stack project using MERN stack technologies — MongoDB, Express.js, React.js, and Node.js.
The goal was to create a system where users can manage books: Add, View, Edit, and Delete them — fully powered by a backend API and connected to a modern frontend interface.

This project helped me understand RESTful API architecture, React component-based UI, client-server communication using Axios, and how to run full-stack apps on my local machine.

🔧 Software & Tools I Used
Here’s everything I installed and used to build this project:

🧠 1. Node.js & NPM
I installed Node.js (v22.x) to run JavaScript code outside the browser.

NPM (Node Package Manager) helped me install backend and frontend packages like:

express, cors, mongoose, dotenv (backend)

axios, react-router-dom (frontend)

💾 2. MongoDB
I used MongoDB as the database to store books.

I connected it using mongoose, a MongoDB ODM (Object Data Modeling) tool.

⚙️ 3. Express.js
I used Express to build the RESTful API in the backend.

Each route supported CRUD operations for books.

🖥️ 4. React.js
I created a React app using create-react-app.

It included pages like:

Home (Book List)

Add/Edit Book Form

React Router handled page navigation.

📡 5. Axios
Axios was used in the frontend to make HTTP requests to the backend API.

🌐 6. VS Code
I used Visual Studio Code for writing and organizing code in both backend and frontend folders.

🧪 7. Postman (optional)
I also used Postman for testing API endpoints before connecting the frontend.

🧱 Project Structure (Brief Overview)
📂 Backend Folder (library-api)
server.js: Main entry point

routes/bookRoutes.js: All API endpoints

models/Book.js: Mongoose schema for books

config/db.js: MongoDB connection setup

📂 Frontend Folder (library-frontend)
src/components/BookList.js: Displays all books

src/pages/AddEditPage.js: Form to add or edit a book

src/services/api.js: Axios API calls

App.js: Main router and layout

⚙️ Functionality
Feature	Description
➕ Add Book	Users can add a new book (title, author, genre, year)
📋 View Books	All books are displayed in a list from the MongoDB database
✏️ Edit Book	Books can be edited with updated info
🗑️ Delete Book	Books can be deleted from the list/database

All data flows from frontend form ➜ API ➜ MongoDB, and updates show live on the React page.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
