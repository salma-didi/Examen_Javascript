const express = require('express');
const exphbs  = require('express-handlebars');


const port1=process.env.PORT || 1000
const app1=express()


app1.use(express.urlencoded({extended: true}));
app1.use(express.json());


app1.engine('hbs', exphbs({ extname: '.hbs' })); 
app1.set('view engine', 'hbs');
 
 //Routes
const routes1 = require('./routes/movies');
app1.use('/', routes1);

app1.listen(port1,()=>{
  console.log(`listen en port ${port1}`)
});

