const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;

  if (method === 'GET' && url === '/') {
    // Read and serve an HTML file for the main page
    const filePath = path.join(__dirname, 'index.html');
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else if (method === 'POST' && url === '/create') {
    // Create a new resource
    // Read and process the request body
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      // Process the body and write to a file
      const newData = JSON.parse(body);
      const filePath = path.join(__dirname, 'data.json');
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Internal Server Error');
        } else {
          const existingData = JSON.parse(data);
          existingData.push(newData);
          fs.writeFile(filePath, JSON.stringify(existingData), (err) => {
            if (err) {
              res.statusCode = 500;
              res.end('Internal Server Error');
            } else {
              res.statusCode = 201;
              res.end('Resource created successfully');
            }
          });
        }
      });
    });
  } else if (method === 'GET' && url === '/read') {
    // Read and serve data from a file
    const filePath = path.join(__dirname, 'data.json');
    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
