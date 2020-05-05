import React from "react";
import { connect } from "react-redux";
const Spinner = ({ loading }) => {
  const loadingUi = loading && (
    <div className='d-flex justify-content-center'>
      <div className='spinner-border text-primary text-center m-5'>
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
  return loadingUi;
};
const mapStateToProps = ({ ui: { loading } }) => {
  return { loading };
};
export default connect(mapStateToProps)(Spinner);
