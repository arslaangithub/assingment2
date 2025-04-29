import React,{useRef} from "react";

function Focus(){
   const inref=useRef(null);
   const handle=()=>{
    inref.current.focus();
   };
   return(
    <div>
        <input ref={inref} type="text"/>
        <button onClick={handle}>click</button>
    </div>
   );
}
export default Focus;