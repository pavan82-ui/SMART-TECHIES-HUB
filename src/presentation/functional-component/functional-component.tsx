

// export function FunctionalComponent()   // this is derived fn,how to convert to expression based? assign to variable
// { 
//     return (
//         <div>
//             Functional component 
//         </div>
//     )
// }

import { useEffect, useState } from "react";
import FunctionalChildComponent from "./functional-child-comp";



const FunctionalComponent = () => {   // this is derived fn,how to convert to expression based? assign to variable
    const [count, setCount] = useState(0);

    const [cnt, setCnt] = myState(0);

    useEffect(() => {

        return () => {
            alert("unload");
        }
    }, [])

    return (
        <div>
            Functional component
            <button onClick={() => { setCount((c) => c + 1); setCount((c) => c + 2); setCount((c) => c + 3); setCnt((cc: any) => cc + 1); }}>Click</button>
            <p>Count: {count}</p>
            <p>Cnt: {cnt}</p>
            <FunctionalChildComponent />
        </div>
    )
}
export default FunctionalComponent;

//state closure magic
function myState(initialvalue: any) {
    //state variable
    let state = initialvalue;

    let setstate = function (callback: any) {
        state = callback(state);
        return state;
    }
    return [state, setstate];
}