const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const imagesDirectory = path.join(__dirname, 'src/assets/images');

app.get('/images', (req, res) => 
{
  fs.readdir(imagesDirectory, (err, files) => 
  {
    if (err) 
    {
      res.status(500).send('Error reading directory');
      return;
    }
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file));
    res.json(imageFiles);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));