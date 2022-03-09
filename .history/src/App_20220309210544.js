import { Route,Switch } from 'react-router-dom';
import './App.css';
import LoginPageContainer from './containers/loginPage/LoginPageContainer';
function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <LoginPageContainer/>
        </Route>
        <Route path="*">
            <div>
               Đây là trang home
            </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
