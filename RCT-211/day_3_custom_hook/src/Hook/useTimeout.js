import {useEffect,useState} from "react"
export function useTimeout(delay) {
   const [ready, setReady] = useState(false);
 
   useEffect(() => {
     let timer = setTimeout(() => setReady(true), delay);
 
     return () => clearTimeout(timer);
   }, []);
 
   return ready;
 }
 
//  // Component
//  export default function() {
//    // false
//    const isReady = useTimeout(2000);
//    return (
//      <div>
//        <h3> Custom Hooks </h3>
//      // will show up once ready
//        {isReady && "Ready"}
//      // will disappear when its ready
//        {!isReady && "Not Ready"}
//      </div>
//    );
//  }
 