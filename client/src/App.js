import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { authCheck } from "./redux/actions/login";
import NavBar from "./components/layouts/NavBar";
import Main from "./components/pages/Main";
import Login from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import FormBuild from "./components/pages/FormBuild";
import { FormsLists } from "./components/pages/FormsLists";
import { FormsSubmissions } from "./components/pages/FormsSubmissions";
import { FormSubmission } from "./components/pages/FormSubmission";
import "./App.css";

function App({ authCheck }) {
  useEffect(() => {
    authCheck();
  });
  const routes = (
    <>
      <Switch>
        <Route path='/' component={Main} exact />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/formbuild' component={FormBuild} />
        <Route path='/formslists' component={FormsLists} />
        <Route path='/formssubmissions' component={FormsSubmissions} />
        <Route path='/formsubmission' component={FormSubmission} />
      </Switch>
    </>
  );
  return (
    <div className='App'>
      <NavBar />
      {routes}
    </div>
  );
}
// const mapStateToProps = ({ login: { loginForm } }) => {
//   return { loginForm };
// };
export default connect(null, { authCheck })(App);
