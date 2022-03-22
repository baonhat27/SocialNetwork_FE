import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import PostPage from "./page/PostPage";
import NewsFeed from "./containers/NewsFeed";

function App() {
  return (
    <div className="App">
      <Switch>
        <HomePage>
          <Switch>
            <Route path="/home">
              <NewsFeed />
            </Route>
            <Route path="/posts/:postId">
              <PostPage />
              <p></p>
            </Route>
          </Switch>
        </HomePage>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profile">
          <ProfilePage token={localStorage.getItem("token")} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
