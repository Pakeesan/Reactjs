import React, { Component } from "react";
// import FirstComponent from "./Components/Test";
// import Secondcomponents from "./Components/prag";
import ButtonAppBar from "./Components/material/Navbar";
import LayoutComponent from "./Components/material/Layout";
// import Input from "./Components/material/Fromcom";
import InputForm from "./Components/material/InputForm";
import LoginForm from "./Components/material/LoginForm";
import StateExample from "./state&props/StateExample";
import StateNAA from "./state&props/StateNAA";
import Didmount from "./mount/Didmount";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h4>welcome</h4> */}
        {/* <FirstComponent /> */}
        {/* <Secondcomponents /> */}
        {/* <ButtonAppBar />
        <LayoutComponent />
        <InputForm />
        <LoginForm />
        <StateExample />
        <StateNAA /> */}
        <Didmount />
      </div>
    );
  }
}
