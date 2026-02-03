// File that does all the action for the app

const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

// Set view engine and views directory
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Serve files from public
app.use(express.static(path.join(__dirname, 'public')));

// Home/Landing/Welcome page
app.get('/', (req, res) => {
    res.render('home');
});

// About page
app.get('/about', (req, res) => {
    res.render('about');
})

// Information/Fun facts page
app.get('/funfacts', (req, res) => {
    res.render('funfacts');
})

// Listen in on the port number specified earlier
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});