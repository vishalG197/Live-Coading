const express = require('express');
const app = express();
const port = 3000; 

app.use(express.json());

app.get('/multiply', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
   if(isNaN(a)&&isNaN(b)) {
      return res.status(400).json({ error: 'Both "a" and "b" are required parameters' });
   }else if(isNaN(b)){
      return res.status(400).json({ error: '"b" is not a valid number' });
   }else{
      return res.status(400).json({ error: '"a" is not a valid number' });
   }
    
  }

  return res.json({ product: a * b });
});


module.exports = app;


if (!module.parent) {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}
