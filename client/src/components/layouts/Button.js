import React from "react";
import { connect } from "react-redux";
const Button = ({
  text,
  type,
  onClick = null,
  className,
  loading,
  disabled = false,
}) => (
  <button
    disabled={loading || disabled}
    onClick={onClick}
    type={type}
    className={className}
  >
    {text}
  </button>
);
const mapStateToProps = ({ ui: { loading } }) => {
  return { loading };
};

export default connect(mapStateToProps)(Button);
