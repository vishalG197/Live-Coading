//middlewares/validator.js:

const validatePlayerData = (req, res, next) => {
   const { name, age, position, goals, assists } = req.body;
 
   if (!name || !age || !position || !goals || !assists) {
     return res.status(400).json({ err: 'Few fields are missing, cannot process the request' });
   }
 
   if (age < 18 || age > 40) {
     return res.status(400).json({ err: 'You are not eligible to play' });
   }
 
   const validPositions = ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'];
   if (!validPositions.includes(position)) {
     return res.status(400).json({ err: 'Incorrect details' });
   }
 
   if (goals <= 50 || assists <= 20) {
     return res.status(400).json({ err: 'You are not eligible to play' });
   }
 
   next();
 };
 
 module.exports = {
   validatePlayerData
 };