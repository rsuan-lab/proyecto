const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const data = require('./database');
const mydb =require('./database/conectionDB')
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

// middlewares
app.use(morgan('dev'));

app.use("db",data);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

//  routes
app.use("/",customerRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});