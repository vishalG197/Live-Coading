//middlewares/record.js:
const fs = require('fs');
const path = require('path');

const recordMiddleware = (req, res, next) => {
  const recordFilePath = path.join(__dirname, '../records.txt');

  const recordMessage = `The player with id:${req.params.id} has been ${req.method === 'DELETE' ? 'deleted' : 'updated'} | ${new Date().toString()}\n`;

  fs.appendFile(recordFilePath, recordMessage, err => {
    if (err) {
      console.error('Error recording action:', err);
    }
  });

  next();
};

module.exports = {
  recordMiddleware
};

 
