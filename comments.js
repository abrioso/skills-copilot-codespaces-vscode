// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Create route
app.get('/comment', (req, res) => {
  res.send('Hello Comment!');
});
// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});