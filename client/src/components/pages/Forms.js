import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getForms } from "../../redux/actions/form";
import "./forms.css";
import Table from "../layouts/Table";
import Spinner from "../layouts/Spinner";
const Forms = ({ getForms, forms, isAuth, loading }) => {
  useEffect(() => {
    isAuth && getForms();
  }, [isAuth]);
  const user = isAuth && JSON.parse(localStorage.getItem("user"));
  return (
    <div className='forms-container'>
      <div className='forms-header'>
        <h2>{user.name} forms</h2>
      </div>
      {forms?.length && !loading ? (
        <Table data={forms} />
      ) : loading ? (
        <Spinner />
      ) : (
        !forms.length && !loading && <h1>No Forms found</h1>
      )}
    </div>
  );
};
const mapStateToProps = ({ form: { forms }, ui: { isAuth, loading } }) => {
  return { forms, isAuth, loading };
};

export default connect(mapStateToProps, { getForms })(Forms);
