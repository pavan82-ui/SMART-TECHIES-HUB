

// const TextBox = () => {
//     return (
//         <input type="text"  ></input>
//     )

import { forwardRef, useImperativeHandle, useRef } from "react";

// }

const TextBox = forwardRef((props, ref:any) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current?.focus();
        },
        clear: () => {
            if (inputRef.current) {
                inputRef.current.value = "";
            }
        },
    }));

    return (
        <input type="text" placeholder="Enter ref..." ref={inputRef} {...props} />
    );

});


export default TextBox;