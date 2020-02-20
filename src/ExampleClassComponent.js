import React from "react";
import { connect } from "react-redux";
import ExampleClass2 from "./Example2";
import { updateName } from "./actions/informationAction";

class ExampleClassComponent extends React.Component {
  state = {
    displayMessage: false,
    message: ""
  };

  render() {
    return (
      <div>
        <div onClick={() => this.props.updateName("Bob Jones")}>CLICK ME</div>
        <ExampleClass2 />
      </div>
    );
  }
}

const mapDispatchToProps = {
  updateName
};

export default connect(null, mapDispatchToProps)(ExampleClassComponent);
