import React, { Component } from "react";

export default class Didmount extends Component {
  constructor() {
    super();
    this.state = {
      person: { name: "", age: "" }
    };
  }

  componentDidMount() {
    this.setState({
      person: { name: "san", age: 23 }
    });
  }
  componentDidUpdate() {
    console.log("intha", this.state);
  }

  render() {
    return (
      <div>
        <p>Name:{this.state.person.name}</p>
        <p>Name:{this.state.person.age}</p>
      </div>
    );
  }
}
