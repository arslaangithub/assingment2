import React from "react";
import Inn from './Inner';

function Outer(){
    return(
        <div>
            <h1>outer js</h1>
            <Inn/>
            <p>ending statement</p>
        </div>
    );
}
export default Outer;