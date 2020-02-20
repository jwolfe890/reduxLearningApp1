import React from "react";
import { connect } from "react-redux";

class Example2 extends React.Component {
  state = {
    displayMessage: false,
    message: ""
  };

  render() {
    // debugger;

    return (
      <div>
        {this.props.information.name && `Name: ${this.props.information.name}`}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    information: state.informationReducer
  };
};

export default connect(mapStateToProps, {})(Example2);
