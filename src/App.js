import { Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./containers/header/HeaderContainer";
import HomeContainer from "./containers/HomePage/HomeContainer";
import LoginPageContainer from "./containers/LoginPage/LoginPageContainer";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPageContainer />
        </Route>
        <Route path="/home">
          <HomeContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
