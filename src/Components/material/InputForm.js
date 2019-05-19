import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";

export default class InputForm extends Component {
  render() {
    return (
      <div align="center">
        <h2>this is form</h2>
        <form>
          <Input
            placeholder="sgicba1009"
            disabled
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Name"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your age"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your Address"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Input
            placeholder="Enter Your mobile"
            style={{ width: "500px", margin: "10px" }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: "500px", padding: "15px" }}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}
