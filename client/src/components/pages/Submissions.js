import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubmissions } from "../../redux/actions/submission";
import Table from "../layouts/SubmissionsTable";
const FormsSubmissions = ({ match, getSubmissions, submissions }) => {
  useEffect(() => {
    const formId = match.params?.id;
    formId && getSubmissions(formId);
  }, []);

  return (
    <div className='forms-container text-center m-5'>
      <h1>SUBMISSION PAGE</h1>
      <Table data={submissions} />
    </div>
  );
};
const mapStateToProps = ({ submission: { submissions } }) => {
  return { submissions };
};

export default connect(mapStateToProps, { getSubmissions })(FormsSubmissions);
