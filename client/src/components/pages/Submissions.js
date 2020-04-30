import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubmissions } from "../../redux/actions/submission";
import Spinner from "../layouts/Spinner";
import Table from "../layouts/SubmissionsTable";
const FormsSubmissions = ({ match, getSubmissions, submissions, loading }) => {
  const formId = match.params?.id;
  useEffect(() => {
    formId && getSubmissions(formId);
  }, [getSubmissions, formId]);

  return (
    <div className='forms-container text-center m-5'>
      <h1>SUBMISSION PAGE</h1>
      {!loading ? <Table data={submissions} /> : <Spinner />}
    </div>
  );
};
const mapStateToProps = ({ ui: { loading }, submission: { submissions } }) => {
  return { submissions, loading };
};

export default connect(mapStateToProps, { getSubmissions })(FormsSubmissions);
