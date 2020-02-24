import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExampleClassComponent from "./ExampleClassComponent";
import Article from "./Article";

// import Form from "./Form";

function App() {
  return (
    <div className="App">
      <ExampleClassComponent />
      {/* <Router>
        <Switch>
          <Route exact path="/" component={ExampleClassComponent} />
          <Route exact path="/article/:id" component={Article} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
