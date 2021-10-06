import { Switch, Route } from "react-router-dom";
import Header from "./components/navbar";
import Login from "./components/login";

import "./App.css";

function App() {
  return <div className="App">
    <Header/>
    <Switch>
      <Route exact path="/" >
        <Login/>
      </Route>
    </Switch>
  </div>;
}

export default App;
