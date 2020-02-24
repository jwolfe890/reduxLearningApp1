import React from "react";
// import Form from "./Form.js";
import { BrowserRouter as Router, Link } from "react-router-dom";

import "./Articles.css";

class Articles extends React.Component {
  renderArticleContent() {
    console.log(this.props.articles);
    let articleFinal = "";
    if (this.props.articles) {
      articleFinal = this.props.articles.data.map(article => {
        return (
          <Link to={{ pathname: `/article/${article.id}` }}>
            <img src={article.images.downsized_large.url}></img>
          </Link>
        );
      });
    }
    return articleFinal;
  }

  render() {
    return (
      <div>
        <div className="container">{this.renderArticleContent()}</div>
      </div>
    );
  }
}

export default Articles;
