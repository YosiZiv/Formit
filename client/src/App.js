import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { authCheck } from "./redux/actions/login";
import NavBar from "./components/layouts/NavBar";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import FormBuild from "./components/pages/FormBuild";
import Forms from "./components/pages/Forms";
import Submissions from "./components/pages/Submissions";
import FormSubmission from "./components/pages/FormSubmission";
import { logout } from "./redux/actions/login";
import "./App.css";

function App({ authCheck, isAuth, redirect, logout, match }) {
  useEffect(() => {
    console.log(match);
    authCheck();
  }, []);

  const routes = (
    <Switch>
      <Route path='/' component={Main} exact />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/formbuild' component={FormBuild} />
      <Route path='/forms' component={Forms} />
      <Route path='/submissions/:id' component={Submissions} />
      <Route path='/form/:id' component={FormSubmission} />
    </Switch>
  );

  return (
    <div className='App'>
      <NavBar logout={logout} isAuth={isAuth} />
      {routes}
    </div>
  );
}
const mapStateToProps = ({ ui: { isAuth, redirect } }) => {
  return { isAuth };
};
export default connect(mapStateToProps, { authCheck, logout })(App);
