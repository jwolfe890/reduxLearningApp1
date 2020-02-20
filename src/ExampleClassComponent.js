import React from "react";
import { connect } from "react-redux";
import ExampleClass2 from "./Example2";
import { addSuperHero } from "./actions/informationAction";

class ExampleClassComponent extends React.Component {
  state = {
    displayMessage: false,
    message: ""
  };

  render() {
    return (
      <div>
        <div
          onClick={() => this.props.addSuperHero("Bob Jones", "Running fast")}
        >
          CLICK ME
        </div>
        <ExampleClass2 />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addSuperHero
};

export default connect(null, mapDispatchToProps)(ExampleClassComponent);
