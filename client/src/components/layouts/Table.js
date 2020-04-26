import React from "react";
import { NavLink } from "react-router-dom";
import "./table.css";
const Table = ({ data }) => {
  const createTable = (data) => {
    // CREATE AND ORDER TABLE ROW FUNCTION
    return data.map((item) => {
      const tdArray = [];
      for (let key in item) {
        switch (key) {
          case "_id":
            tdArray[0] = <td key={item[key]}>{item[key]}</td>;
            break;
          case "formName":
            tdArray[1] = <td key={item[key]}>{item[key]}</td>;
            break;
          case "submissions":
            tdArray[2] = <td key={item[key]}>{item[key]}</td>;
            break;
          case "user":
            tdArray[3] = (
              <td key={item[key]}>
                <NavLink
                  className='nav-item nav-link'
                  activeClassName='nav-active'
                  to={`/form/${item._id}`}
                >
                  Submit
                </NavLink>
              </td>
            );
            break;
          case "fields":
            tdArray[4] = (
              <td key={item[key]}>
                <NavLink
                  className='nav-item nav-link'
                  activeClassName='nav-active'
                  to={`/submissions/${item._id}`}
                >
                  Submissions
                </NavLink>
              </td>
            );
            break;
          default:
            break;
        }
      }

      return <tr key={item["_id"]}>{[...tdArray]}</tr>;
    });
  };
  return (
    <>
      <div className='table-container'>
        <table className='form-table'>
          <thead>
            <tr>
              <th>form Id</th>
              <th>form Name</th>
              <th>Submissions</th>
              <th>Submit Page</th>
              <th>Submissions Page</th>
            </tr>
          </thead>
          <tbody>{createTable(data)}</tbody>
        </table>
      </div>
    </>
  );
};
export default Table;
