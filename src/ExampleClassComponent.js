import React from "react";
import Articles from "./Articles.js";

class ExampleClassComponent extends React.Component {
  state = {
    articleData: ""
  };

  apiMethod = async query => {
    const api_call = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=5d30D599o0h7uKemfq7wAdwLi9a78Gt3&q=astronomy`
    );

    let data = await api_call.json();

    if (data) {
      this.setState({
        articleData: data
      });
    }
  };

  render() {
    debugger;

    return (
      <div>
        <div onClick={this.apiMethod}>SHOW IMAGES</div>
        {/* <Form apiMethod={this.apiMethod} /> */}
        <Articles articles={this.state.articleData} />
      </div>
    );
  }
}

export default ExampleClassComponent;
