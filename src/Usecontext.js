import React,{createContext,useContext} from "react";
const ThemeContext=createContext("grey");

function UseConDemo(){
    const theme=useContext(ThemeContext);
    return(
        <div style={{backgroundColor:theme,padding:'10px'}}>
            <h2>useContext hook</h2>
            <p>theme :{theme}</p>
        </div>
    );
};

function Ran(){
    return(
    <ThemeContext.Provider value="green">
        <UseConDemo/>
    </ThemeContext.Provider>
    );
}

export default Ran;
