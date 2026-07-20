import React from "react";

export class ClassChildComponent extends React.PureComponent {
    render() {
        return (
            console.log("ClassChildComponent rendered"),
            <div>
                Class Child Component
            </div>
        )
    }
}