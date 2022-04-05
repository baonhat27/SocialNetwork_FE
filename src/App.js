import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProfilePage from "./page/ProfilePage";
import SearchPageContainer from "./page/SearchPage";
import PostPage from "./page/PostPage";
import NewsFeed from "./containers/NewsFeed";
import MessagePageContainer from "./page/MessagePage";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const io = useSelector((state) => state.io);
  useEffect(() => {}, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profile">
          <ProfilePage token={localStorage.getItem("token")} />
        </Route>
        <Route path="/search">
          <SearchPageContainer />
        </Route>
        <Route path="/message">
          <MessagePageContainer />
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
