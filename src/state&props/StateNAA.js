import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class StateNAA extends Component {
  constructor() {
    super();
    this.changeName = this.changeName.bind(this);
    this.state = { name: "mathan", age: 23, email: "mathan@gmail.com" };
  }
  changeName() {
    this.setState({ name: "san", age: 21, email: "san@gmail.com" });
  }
  render() {
    return (
      <div>
        <h3>hello {this.state.name}</h3>
        <h3>hello {this.state.age}</h3>
        <h3>hello {this.state.email}</h3>
        <Button onClick={this.changeName}>change</Button>
      </div>
    );
  }
}
