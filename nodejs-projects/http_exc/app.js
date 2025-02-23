

const express = require('express');
const morgan = require('morgan');

// express app

const app = express();


// register view engine

app.set('view engine', 'ejs');


// let app listen for requests
app.listen(3000);


// middleware & static files
app.use(express.static('public')); // public file olusturup static css stylelarını buraya koyarsan browser erisebilir.
app.use(morgan('dev'));


app.get('/',(req,res) => {
    // res.sendFile('./views/index.html', { root: __dirname })
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title : "home", blogs});
});

app.get('/about',(req,res) => {
    // res.sendFile('./views/about.html', { root: __dirname })
    res.render('about',{title : "about"});
});

app.get('/about-us', (req,res) => {
    res.redirect('about',{title : "home"});
})

app.get('/blogs/create',(req,res) => {
    res.render('create',{title : "create a new blog"});
})







// url matching için yukardan aşağıya her get methodunu kontrol edecek. 
// eger uyan bir route cıkmazsa bu method çagrılacak. (en asagida kullanman lazim)
app.use((req, res) => {
    // res.status(404).sendFile('./views/404.html', { root: __dirname })
    res.status(404).render('404',{title : "404"});
});

// app.get('/',(req,res) => {

//     res.send("<p>home page </p>");
// });