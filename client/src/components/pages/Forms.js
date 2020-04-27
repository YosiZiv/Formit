import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getForms } from "../../redux/actions/form";
import Table from "../layouts/Table";
const Forms = ({ getForms, forms, isAuth }) => {
  useEffect(() => {
    isAuth && getForms();
  }, [isAuth]);

  return (
    <div className='forms-container'>
      {forms?.length ? <Table data={forms} /> : <h1>No Forms found</h1>}
    </div>
  );
};
const mapStateToProps = ({ form: { forms }, ui: { isAuth } }) => {
  return { forms, isAuth };
};

export default connect(mapStateToProps, { getForms })(Forms);
