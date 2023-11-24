const path = require('path');
const express = require('express');
const app = express();
const port = 3000;
const fs = require('fs');
const bodyParser = require('body-parser');
const imagesDirectory = path.join(__dirname, '../src/assets/images');

let imageFiles;

fs.readdir(imagesDirectory, (err, files) => {
  if (err) 
  {
    res.status(500).send('Error reading directory');
    return;
  }
  imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
});

app.get('/images', (req, res) => 
{
  res.json(imageFiles);
});

app.listen(port, () => console.log("Running on port " + port));