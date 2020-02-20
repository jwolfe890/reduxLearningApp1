import React from "react";
import { connect } from "react-redux";

class Example2 extends React.Component {
  state = {
    displayMessage: false,
    message: ""
  };

  render() {
    debugger;

    let people = "";

    if (this.props.information) {
      people = this.props.information.map(individual => {
        return (
          <div>
            <div>{individual.name}</div>
            <div>{individual.superPower}</div>
          </div>
        );
      });
    }

    return (
      <div>
        {/* {this.props.information.ma && `Name: ${this.props.information.name}`} */}
        {people}
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
