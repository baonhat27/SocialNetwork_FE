import { Route,Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from './containers/header/HeaderContainer';
import HomeContainer from './containers/home/HomeContainer';
import LoginPageContainer from './containers/loginPage/LoginPageContainer';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <LoginPageContainer/>
        </Route>
        <Route path="/home">
            <HeaderContainer/>
            <HomeContainer/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
