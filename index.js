//Include Mongoose
const MongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose')

const uri = "mongodb+srv://admin:admin@cluster0-ur5rd.gcp.mongodb.net/application?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db('application').collection('vehicles');
//   // perform actions on the collection object
//   var data = collection.find().toArray((err, items)=> { console.log(items)})
//   console.log(data);
//   client.close();
// });

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var vehicleRouter = require('./routes/vehicle');

mongoose.connect(
    uri, 
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
        if(!err) console.log('DB Connected!')
    }
);

var app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/vehicles', vehicleRouter);


module.exports = app;


