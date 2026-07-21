import React from "react";
import { ClassChildComponent } from "./class-child-component";

interface ClassComponentState {
    title: string;
    count: number;
}

export class ClassComponent extends React.Component<{}, ClassComponentState> {
    constructor(props: {}) {
        console.log("class component");
        super(props); // base class constructor
        this.state = {
            title: "Class Component",
            count: 0
        };
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps called");
        return null; // no state update based on props
    }

    incrementCount = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1  //sttae has multiple values u must specify key name to update the value of that key
        }));
    }
    componentDidMount() { // useeffect
        console.log("componentDidMount called");
    }
    shouldComponentUpdate() {
        return false;
    }
    getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate called");
    }
    componentDidUpdate() {
        console.log("componentDidUpdate called");
    }
    componentWillUnmount() {
        //any objects created during the comonent lifecycle should be destroyed here to avoid memory leaks
        console.log("componentWillUnmount called");
    }
    render() {
        console.log("ClassComponent rendered");
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