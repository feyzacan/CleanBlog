const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
});
  
  const port = 3000;
  app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı..`);
  });