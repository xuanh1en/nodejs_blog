

const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const handlebars = require('express-handlebars').engine;
const path = require('path');

const route=require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//Http logger
app.use(morgan('combined'))

//template engine

app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources//views'));


route(app);

// console.log(path.join(__dirname,'resources//views'))






app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})