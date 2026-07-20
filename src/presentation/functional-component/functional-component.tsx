

// export function FunctionalComponent()   // this is derived fn,how to convert to expression based? assign to variable
// { 
//     return (
//         <div>
//             Functional component 
//         </div>
//     )
// }

import { useState } from "react";
import FunctionalChildComponent from "./functional-child-comp";



const FunctionalComponent = () => {   // this is derived fn,how to convert to expression based? assign to variable
    const [count, setCount] = useState(0);
   
    return (
        <div>
            Functional component 
            <button onClick={() => setCount(count + 1)}>Click</button>
            <p>Count: {count}</p>
            <FunctionalChildComponent></FunctionalChildComponent>
        </div>
    )
}
export default FunctionalComponent;