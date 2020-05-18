const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
// setup template engine
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine','handlebars');
// setup express static public folder for css and js and images
app.use(express.static('public'));
// Setup enviroment variables
const port = process.env.PORT || 3000;

// this is the home route handler
app.get('/',(req, res) =>{
    res.render('home');
});

// this is the about route handler
app.get('/about',(req, res) =>{
    res.render('about');
});

// this is the resume route handler
app.get('/resume',(req, res) =>{
    res.render('resume');
});

// this is the contact route handler
app.get('/contact',(req, res) =>{
    res.render('contact');
});

// this is the portfolio route handler
app.get('/portfolio',(req, res) =>{
    res.render('portfolio');
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});