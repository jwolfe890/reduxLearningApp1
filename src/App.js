// import React from "react";
// import ExampleClassComponent from "./ExampleClassComponent";

// function App() {
//   return (
//     <div className="App">
//       <ExampleClassComponent />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import ExampleClassComponent from "./ExampleClassComponent";
import TestComponent from "./TestComponent.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={ExampleClassComponent} />
          <Route path="/path/testComponent" component={TestComponent} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
