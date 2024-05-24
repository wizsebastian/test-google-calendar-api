import express from 'express';
import UserRoutes from './routes/user.routes.js';
import path from 'path';
import db from './config/db.js';

// Create the app
const app = express();

// Aviable read form data
app.use(express.urlencoded({ extended: true }));

// Connect to the database
try {
    await db.authenticate();
    db.sync();
    console.log('Connection has been established successfully.');
} catch (e) {
    console.log('Unable to connect to the database:', e);
}
// Set Pug as the view engine
app.set('view engine', 'pug');
app.set('views', './views');


// Set public Routes
app.use(express.static('public'));


// routing
app.use('/auth', UserRoutes)


// Define the port
const port = 8000;



// Run the server
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})