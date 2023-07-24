function Square({ n }) {
   if (n <= 1) {
     return null;
   }
 
   const squareStyle = {
     width: `${n * 100}px`,
     height: `${n * 100}px`,
     border:"1px solid red"
    //  backgroundColor: 'red',
   };
 
   return (
     <div style={squareStyle}>
       <Square n={n - 1} />
     </div>
   );
 }
 
 export default Square;
 