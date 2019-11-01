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
    setTimeout(() => {
      this.setState({ buttonName: "Loading..." });
    }, 500);
  };
  render() {
    let { buttonName } = this.state;
    return (
      <>
        <div className="header" onClick={this.headerClicked}>
          Search Options <i class="arrow down" />
        </div>
        {this.state.collapseExpand && (
          <div>
            <div className="container1">
              <div className="card">
                <div class="card-header">Level ID / EAN</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Option 1
                    </label>
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Option 1
                    </label>
                    <div class="form-group">
                      <input type="text" class="form-control" id="usr" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div class="card-header">Hierarchy</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Option 1
                    </label>
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Option 1
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div class="card-header">Hierarchy Direction Type</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Option 1
                    </label>
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Option 1
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div class="card-header">Cash Or Delete</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Option 1
                    </label>
                    <label class="form-check-label">
                      <input
                        type="radio"
                        class="form-check-input"
                        name="optradio"
                      />
                      Option 1
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="subHeader">Service Group Types</div>
            <div class="form-check">
              <label class="form-check-label">
                <input type="checkbox" class="form-check-input" value="" />
                All
              </label>
            </div>
            <div className="container2">
              <div className="card">
                <div class="card-header">FXE</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 1
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div class="card-header">FXG</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 1
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div class="card-header">FXE</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 1
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="subHeader">Region / Country</div>
            <div className="container3">
              <div className="card">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 1
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
              <div className="card">
                <div class="card-header">Header</div>
                <div class="card-body">
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 1
                    </label>
                  </div>
                  <div class="form-check">
                    <label class="form-check-label">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        value=""
                      />
                      Option 2
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="button" onClick={this.handleButton}>
              {buttonName}
            </div>
          </div>
        )}
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
