const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

var cors = require('cors');
const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
// importing routes
const customerRoutes = require('./routes/customer');

// settings
app.set('port', process.env.PORT || 3001);
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));

app.use(myConnection(mysql, {
  host: 'localhost',
  user: 'user',
  password: 'password',
  port: 3306,
  database: 'db'
}, 'single'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//  routes
app.use("/",customerRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});