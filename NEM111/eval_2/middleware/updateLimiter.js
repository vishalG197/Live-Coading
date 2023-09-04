//middlewares/updateLimiter.js:
const updateLimiter = (req, res, next) => {
   const mutableFields = ['name', 'age', 'position', 'goals', 'assists'];
   const isMutable = mutableFields.some(field => req.body[field] !== undefined);
 
   if (isMutable) {
     return next();
   } else {
     return res.status(403).json({ err: 'Document is not mutable' });
   }
 };
 
 module.exports = {
   updateLimiter
 };