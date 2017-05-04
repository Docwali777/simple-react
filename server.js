const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const path = require('path');

app.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/build/index.html'))
})

app.listen(PORT, ()=>{
  console.log(`Server operating on PORT: ${PORT}`);
})
