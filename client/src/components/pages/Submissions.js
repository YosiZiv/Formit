import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getSubmissions } from "../../redux/actions/submission";
import Spinner from "../layouts/Spinner";
import Table from "../layouts/SubmissionsTable";
import Messages from "../layouts/Messages";
const FormsSubmissions = ({ match, getSubmissions, submissions, messages }) => {
  const formId = match.params?.id;
  useEffect(() => {
    formId && getSubmissions(formId);
  }, [getSubmissions, formId]);
  return (
    <div className='forms-container text-center m-5'>
      <h1>SUBMISSION PAGE</h1>
      {submissions?.length ? <Table data={submissions} /> : null}
      <Spinner />
      <Messages color='#EC1414' messages={messages} />
    </div>
  );
};
const mapStateToProps = ({ ui: { messages }, submission: { submissions } }) => {
  return { submissions, messages };
};

export default connect(mapStateToProps, { getSubmissions })(FormsSubmissions);
