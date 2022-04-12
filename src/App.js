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
import { useDispatch, useSelector } from "react-redux";
import IncomingCallModal from "./containers/IncomingCallModal";
import videoCallHandle from "./shared/service/videoCallHandle";
import VideoCallPage from "./page/VideoCallPage";

function App() {
  const socket = useSelector((state) => state.io);
  const incomingCall = useSelector((state) => state.incomingCall);
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('veriy', socket)
    socket.emit('verify', localStorage.getItem('refreshToken') || '')
    socket.on('verify', result => {
      if (result === 'OK')
        videoCallHandle(socket, dispatch)
      else {
        alert('token khong hop le, vui long dang nhap lai')
      }
    })

    return () => {
      console.log('unmount')
      socket.disconnect()
    }
  }, []);
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profile">
          <ProfilePage token={localStorage.getItem("token")} />
        </Route>
        <Route path="/call">
          <VideoCallPage />
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

      {
        incomingCall.isShow && !["/call", "/login"].includes(window.location.pathname) && <IncomingCallModal {...incomingCall} />
      }
    </div>
  );
}

export default App;
