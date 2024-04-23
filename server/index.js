'use strict'; 

require('dotenv').config(); 

const fs = require('fs');
const join = require('path').join;
const express = require('express');
const mongoose = require('mongoose');  
const casa = require('./otro');

const models = join(__dirname, 'models');
const port = process.env.PORT || 3000;
const app = express();

/**
 * Expose
 */

module.exports = app;  
 
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
 
 
 app.get("/api", (req, res) => {
  console.log("casa()", casa.casa())
   res.json({ message: "Hola desde el index!"  });
  });
 
/*   var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId; 

  var Datos = new Schema({
    id    : ObjectId
  , primero     : String
  , segundo     : String
  });
 
  mongoose.model('Datos', Datos);
  var datos = mongoose.model('Datos');

  var data = {
    primero:'investic',
    segundo:'investoc',
  };
 
  var midato = new datos(data);
 
  midato.save(function(err) {
  if (err) console.log(err);
  else console.log('Parece que bien');
  });
 
  
  console.log(datos.find());
 */
 

function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen);
  return mongoose.connect("mongodb://mongo:27017/", {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}
