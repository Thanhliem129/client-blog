import TopBar from "./components/topbar/topbar";
import Home from "./page/home/home";
import Login from "./page/login/login";
import Register from "./page/register/register";
import Setting from "./page/setting/setting";
import Single from "./page/single/single";
import Write from "./page/write/write";
import React, { useContext } from "react";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import { Context } from "./context/context";

function App() {
  const {user} = useContext(Context);

  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register"> { user ? <Home /> : <Register /> }</Route>
        <Route path="/login"> { user ? <Home /> : <Login />}</Route>
        <Route path="/setting">{ user ? <Setting /> : <Login />}</Route>
        <Route path="/write"> { user ? <Write /> : <Login />}</Route>
        <Route path="/post/:postId"><Single /> </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
