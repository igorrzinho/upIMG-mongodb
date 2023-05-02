const express = require('express');
const app = express();
require('dotenv').config();
require("./db")

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('oi');
});

const pictureRouter = require("./routes/picture")
app.use('/pictures', pictureRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
