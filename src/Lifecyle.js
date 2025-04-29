import React, { Component } from "react";

class X extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
        console.log("Initialized");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("synced");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("checked");
        return true;
    }

    componentDidMount() {
        console.log("Mounted");
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("captured");
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Updated");
    }

    componentWillUnmount() {
        console.log("Bye!!");
    }

    render() {
        return (
            <>
                <h1>count: {this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Inc
                </button>
            </>
        );
    }
}

export default X;
