import React from "react";
import { ClassChildComponent } from "./class-child-component";

interface ClassComponentState {
    title: string;
    count: number;
}

export class ClassComponent extends React.Component<{}, ClassComponentState> {
    constructor(props: {}) {
        super(props); // base class constructor
        this.state = {
            title: "Class Component",
            count: 0
        };
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1  //sttae has multiple values u must specify key name to update the value of that key
        }));
    }
    render() {
        return (
            <div>
                {this.state.title}
                <button onClick={this.incrementCount}>
                    class component click
                </button>
                <ClassChildComponent></ClassChildComponent>
                <p>Count: {this.state.count}</p>
            </div>
        )
    }

}