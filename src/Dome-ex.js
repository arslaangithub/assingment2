
import React,{useState} from 'react';
function Domexample(){
    const [count,setCount]=useState(0);
    const inc=()=>{
        setCount(count+1);
    };
    return(
        <div>
            <h1>virtual dom</h1>
            <p>count: {count}</p>
            <button onClick={inc}>INC</button>
            <p>see the changes</p>
        </div>
    );

}
export default Domexample;