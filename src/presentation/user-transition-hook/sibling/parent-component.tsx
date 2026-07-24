import { useState } from "react";
import Sibling1 from "./sibling1";
import Sibling2 from "./sibling2";


export default function ParentSib() {

    const [sib1Data, setsib1Data] = useState<string>("");

    return (
        <div>
           <Sibling1  textBoxdata={(data:any)=>{
            setsib1Data(data)
           }}></Sibling1>
           <Sibling2 data={sib1Data}></Sibling2>
        </div>
    )
}