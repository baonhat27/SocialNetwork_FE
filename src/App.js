import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomePage/HomeContainer";
import LoginPageContainer from "./containers/LoginPage/LoginPage";
import ProfilePageContainer from "./containers/ProfilePage/ProfilePage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPageContainer/>
        </Route>
        <Route path="/profile">
          <ProfilePageContainer/>
        </Route>
        <Route path="/home">
          <HomeContainer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
