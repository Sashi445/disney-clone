import { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/navbar";
import Login from "./components/login";
import Home from './components/Home';
import Detail from './components/Detail';

import "./App.css";

function App() {

  useEffect(() => {
    console.log("Starting up....🚀");
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/detail/:id" component={Detail}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
