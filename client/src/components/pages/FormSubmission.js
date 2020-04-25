import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getForm } from "../../redux/actions/form";
const FormSubmission = () => {
  useEffect(() => {
    getForm();
  });
  return <h1>hello from FormSubmission page</h1>;
};
// const mapStateToProps = ({ formBuild: { form }, ui: { redirect, isAuth } }) => {
//   return {  };
// };

export default connect(null, {
  getForm,
})(FormSubmission);
