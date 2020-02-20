import React from "react";
import { connect } from "react-redux";
import { updateName, updateFood } from "./actions/informationAction";

class ExampleClassComponent extends React.Component {
  state = {
    displayMessage: false,
    message: ""
  };

  render() {
    debugger;

    return (
      <div>
        <div onClick={() => this.props.updateName("Bob Jones")}>CLICK ME</div>
        {this.props.information.name}
        {this.props.information.favoriteFood}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    information: state.informationReducer
  };
};

const mapDispatchToProps = {
  updateName,
  updateFood
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleClassComponent);
