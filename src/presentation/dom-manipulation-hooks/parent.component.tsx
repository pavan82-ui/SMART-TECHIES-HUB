import { useLayoutEffect, useRef } from "react";
import TextBox from "../shared/atomic/textbox-controller";


const ParentCom = () => {
    const countRef = useRef(0);
    const inputRef = useRef<HTMLInputElement | null>(null);

    useLayoutEffect(() => {
        inputRef.current?.focus();
    }, []);
    return (
        <div>
            <button onClick={() => {
                countRef.current++;
                alert(countRef.current);
                inputRef.current?.focus();
            }}>
                Set Focus
            </button>
            <button onClick={() => {
                if (inputRef.current) inputRef.current.value = "";
            }}>
                Clear
            </button>
            Parent Com :{countRef.current}
            <input type="button"  onClick={() => {
                if (inputRef.current) inputRef.current.style.backgroundColor = "red";
            }} value="Focus Input" />
            <TextBox ref={inputRef}  />
           {/* // <input type="text" ref={inputRef} /> */}

        </div>
    )
}
export default ParentCom;