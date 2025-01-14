const express = require('express');
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Serve static files for production with the correct basePath
  const basePath = '/quick-learning-app'; // Adjust this based on your basePath configuration in next.config.js

  // In production, we need to serve assets with the basePath prefix
  server.use(`${basePath}/_next`, express.static(path.join(__dirname, '.next', '_next')));
  
  // Handle all requests
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server on port 3000
  server.listen(3000, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:3000${basePath}`);
  });
});
