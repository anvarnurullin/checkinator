const express = require('express');
const app = express();
const sharp = require('sharp');

app.get('/makeimage', (req, res) => {
  const width = parseInt(req.query.width || 100);
  const height = parseInt(req.query.height || 200);

  sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 1 }
    }
  })
    .png()
    .toBuffer()
    .then((data) => {
      res.set('Content-Type', 'image/png');
      res.send(data);
    })
});

app.get('/login', (req, res) => {
  const login = 'anvarnurullin';
  res.send(login);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
});