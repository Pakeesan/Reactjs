import React, { Component } from "react";
import { Button, Input } from "@material-ui/core";
export default class LoginForm extends Component {
  render() {
    return (
      <div align="center">
        <form>
          <Input
            placeholder="
              enter your email"
            style={{ width: "500px", padding: "15px" }}
          />
          <br />

          <Input
            placeholder="
            enter your email"
            style={{ width: "500px", padding: "15px" }}
          />
          <br />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            style={{ width: "500px", padding: "15px" }}
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}
