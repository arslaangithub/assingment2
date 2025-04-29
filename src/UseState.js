import React,{useState} from "react";
function Inc(){
    const [count ,setCount]=useState(0);
    return(
        <div>
            <p>count :{count}</p>
            <button onClick={()=>setCount(count+1)}>click</button>
        </div>
    );
}
export default Inc;