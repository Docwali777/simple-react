const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const path = require('path');

app.use(express.static(__dirname +  '/build'));

app.listen(PORT, ()=>{
  console.log(`Server operating on PORT: ${PORT}`);
})
