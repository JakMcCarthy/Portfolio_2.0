const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, './folio2.0/build')));

// Handle requests and return the React app
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './folio2.0/build', 'index.html'));
});

// Start the server
app.listen( port, () => {
  console.log(`Server is running on port ${port}`);
});