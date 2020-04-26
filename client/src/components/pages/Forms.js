import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getForms } from "../../redux/actions/form";
import Table from "../layouts/Table";
const Forms = ({ getForms, forms }) => {
  useEffect(() => {
    getForms();
  }, []);

  return (
    <div className='forms-container'>
      {forms.length ? <Table data={forms} /> : <h1>No Forms found</h1>}
    </div>
  );
};
const mapStateToProps = ({ form: { forms } }) => {
  return { forms };
};

export default connect(mapStateToProps, { getForms })(Forms);
