import { useState } from "react";
import Sibling1 from "./sibling1";
import Sibling2 from "./sibling2";


export default function ParentSib() {

 
    return (
        <div>
           <Sibling1 ></Sibling1>
           <Sibling2 ></Sibling2>
        </div>
    )
}