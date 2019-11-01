import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      collapseExpand: true,
      buttonName: "Search"
    };
  }
  headerClicked = () => {
    this.setState({ collapseExpand: !this.state.collapseExpand });
  };
  handleButton = () => {
    setTimeout( () => {
      this.setState({buttonName: "loading..."})
    }, 500);
  }
  render() {
    let {buttonName} = this.state;
    return (
      <>
        <div className="header" onClick={this.headerClicked}>
          Header <i class="arrow down" />
        </div>
        {this.state.collapseExpand && (
          <div>
            <div className="container">
              <div className="card">One</div>
              <div className="card">One</div>
              <div className="card">One</div>
              <div className="card">One</div>
            </div>
            <div className="container">
              <div className="card">One</div>
              <div className="card">One</div>
              <div className="card">One</div>
            </div>
            <div className="container">
              <div className="card">One</div>
              <div className="card">One</div>
            </div>
            <div className="button" onClick={this.handleButton}>{buttonName}</div>
          </div>
        )}
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
