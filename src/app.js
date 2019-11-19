const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mongoose=require('mongoose');
const app=express();
//import routes
const indexRoutes=require ('./routes/index');
//connecting to db
mongoose.connect('mongodb://localhost/crudmongo')
.then(db => console.log('db conectada'))
.catch(err =>console.log(err));
//settings
app.set('port', process.env.PORT ||5000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//middelwears
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
//routes
app.use('/', indexRoutes);
//Starting server
app.listen(app.get('port'), () =>{
console.log(`server on port ${app.get('port')}`);
});