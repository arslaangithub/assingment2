import React, { useState, useEffect } from 'react';

function Time(){
  const [sec,setSec]=useState(0);
  useEffect(()=>{
    const interval=setInterval(()=>{
      setSec(sec=>sec+1);
    },1000);
    return ()=>clearInterval(interval);
  },[]);
  return <p>Timer:{sec}s</p>
}

export default Time;