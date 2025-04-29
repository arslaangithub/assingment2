import React from "react";
function Prop(props){
    return(
        <div>
        <h1>Player name</h1>
        <p>Name:{props.name}</p>
        <p>country :{props.country}</p>
        </div>
    );
}
export default Prop;
