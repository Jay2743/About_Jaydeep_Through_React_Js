import React, { useState } from "react";
import {data} from './api';
import MyAccordion from "./MyAccordion";
import "./Accordion.css";
const Accordion=()=>{
    const [sdata,setData]=useState(data)
    return(
        <>
        <section className="main-div">
        <h1>Jaydeep Nalawade</h1>
           {
            sdata.map((curretEle)=>{
                const {id}=curretEle;
                return (<MyAccordion key={id}{...curretEle}/>);
            })
           }
           </section>
        </>
    )
}

export default Accordion;