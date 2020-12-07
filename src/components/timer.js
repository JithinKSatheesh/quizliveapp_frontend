import React from 'react'
import {useState,useEffect} from 'react'

export default function Timer({seconds}) {
   // initialize timeLeft with the seconds prop
   const [timeLeft, setTimeLeft] = useState(seconds);
  
   useEffect(() => {
     // exit early when we reach 0
     // save intervalId to clear the interval when the
     // component re-renders
     if (!timeLeft) return;

     const intervalId = setInterval(() => {
       setTimeLeft(timeLeft - 1);
     }, 1000);
     
     return () => clearInterval(intervalId);
 
     // clear interval on re-render to avoid memory leaks
     // add timeLeft as a dependency to re-rerun the effect
     // when we update it
   }, [timeLeft]);
 
   return (
     <div>
       <h1>{timeLeft}</h1>
     </div>
   )
}
