if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const Project = require('./models/projectModel');


//const authRoutes = require('./routes/authRoutes')
const projectRoutes = require('./routes/projectRoutes');
//const APIRoutes = require('./routes/APIRoutes');
const emailRoutes = require('./routes/emailRoutes');



const app = express();

//view engine
app.set('view-engine', 'ejs');

//middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());


//routes
app.get('/', async (req, res) =>{
    const projects = await Project.find().sort({
        createdAt: 'desc'
    });

    res.render('index.ejs', {projects: projects});
}); 

app.get('/contact', async (req, res) =>{
    res.render('contact.ejs');
}); 


  
//app.use(authRoutes);
app.use('/api/v1/projects', projectRoutes);
app.use('/projects', projectRoutes);
app.use('/email/v1', emailRoutes);
//app.use('/api/v1', APIRoutes);
app.use((req, res, next) => {
    res.render('404.ejs');
})
module.exports = app;