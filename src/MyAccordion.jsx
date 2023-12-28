import React, { useState } from "react";
import "./Accordion.css";
const MyAccordion=({question,answer})=>{
    const [show,setShow]=useState(false);
    return(
        <>
        <div className="main-heading">
            <p onClick={()=>setShow(!show)}>{show?  "—" : "◯"}</p>
            <h3>{question}</h3>
        </div>

        {show && <p className="answer">{answer}</p>}
        </>
    )
}

export default MyAccordion;