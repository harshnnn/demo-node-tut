const express = require('express');
const app = express();
  
app.get('/', (req, res) => {
  res.send('<h1>Hello from your Express.js server!!</h1>');
});
  
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
