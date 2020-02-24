import React from "react";

class Form extends React.Component {
  state = {
    searchQuery: ""
  };

  setQuery = e => {
    this.setState({
      searchQuery: e.target.value
    });
  };

  updateQuery = () => {
    this.props.apiMethod(this.state.searchQuery);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={e => this.setQuery(e)}
            value={this.state.searchQuery}
          />
        </form>
        <button onClick={this.updateQuery}>Search</button>
      </div>
    );
  }
}

export default Form;
