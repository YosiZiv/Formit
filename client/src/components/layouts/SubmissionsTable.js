import React from "react";
import "./table.css";
const SubmissionTable = ({ data }) => {
  let table;
  const createTable = (data) => {
    if (data.length) {
      const head = data[0].fields.map((items) => {
        return <th key={items.name}>{items.name}</th>;
      });
      const body = data.map((items, index) => {
        const row = items.fields.map((item) => {
          return <td key={item.value}>{item.value}</td>;
        });
        return (
          <tr key={index}>
            <td>{index}</td>
            {row}
          </tr>
        );
      });
      return { head, body };
    }
  };
  if (data?.length) {
    table = createTable(data);
  }
  return (
    <>
      <div className='table-container'>
        {data?.length && (
          <table className='form-table'>
            <thead>
              <tr>
                <th>Index</th>
                {table.head}
              </tr>
            </thead>
            <tbody>{table.body}</tbody>
          </table>
        )}
      </div>
    </>
  );
};
export default SubmissionTable;
