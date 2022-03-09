import { Route,Switch } from 'react-router-dom';
import './App.css';
<<<<<<< HEAD
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
=======
import HomeContainer from './containers/home/HomeContainer';
import HeaderContainer from './containers/header/HeaderContainer';
import 'antd/dist/antd.min.css'

function App() {
  return (
    <div className="App">
        <HeaderContainer/>
        <HomeContainer/>
        {/* <LoginPageContainer/> */}
>>>>>>> 42840da (Layout HomePage)
    </div>
  );
}

export default App;
