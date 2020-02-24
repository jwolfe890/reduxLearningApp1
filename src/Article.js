import React from "react";

class Article extends React.Component {
  componentDidMount() {
    this.apiMethod();
  }

  apiMethod = async query => {
    const api_call = await fetch(
      `https://api.giphy.com/v1/gifs/${this.props.match.params.id}?api_key=5d30D599o0h7uKemfq7wAdwLi9a78Gt3`
    );

    let data = await api_call.json();

    debugger;

    if (data) {
      this.setState({
        articleData: data
      });
    }
  };

  render() {
    return <div>ID PAGE</div>;
  }
}

export default Article;
