import { Switch, Route } from "react-router-dom";
import Login from "./components/login";

import "./App.css";

function App() {
  return <div className="App">
    <Switch>
      <Route exact path="/" >
        <Login/>
      </Route>
    </Switch>
  </div>;
}

export default App;
