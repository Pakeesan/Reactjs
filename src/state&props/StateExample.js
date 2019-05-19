import React, { Component } from "react";
import { Button } from "@material-ui/core";

export default class StateExample extends Component {
  constructor() {
    super();
    this.changename = this.changename.bind(this);
    this.state = { name: "pakees" };
  }
  changename() {
    this.setState({ name: "san" });
  }

  render() {
    return (
      <div>
        <h3>hello {this.state.name}</h3>
        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={this.changename}
        >
          change
        </Button>
      </div>
    );
  }
}
