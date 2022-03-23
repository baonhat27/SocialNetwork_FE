import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import SearchPageContainer from "./page/SearchPage";
import PostPage from "./page/PostPage";
import NewsFeed from "./containers/NewsFeed";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profile">
          <ProfilePage token={localStorage.getItem('token')}/>
        </Route>
        <Route path="/search">
          <SearchPageContainer/>
        </Route>
        <Route path="*">
          <HomePage/>
        </Route>

        <HomePage>
          <Switch>
            <Route path="/home">
              <NewsFeed />
            </Route>
            <Route path="/posts/:postId">
              <PostPage />
            </Route>
          </Switch>
        </HomePage>
      </Switch>
    </div>
  );
}

export default App;
