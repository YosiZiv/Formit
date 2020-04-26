import React from "react";
import "./table.css";
const SubmissionTable = ({ data }) => {
  let table;

  const createTable = (data) => {
    console.log(data);

    if (data.length) {
      console.log(data[0].fields);
      const head = data[0].fields.map((items) => {
        return <th>{items.name}</th>;
      });
      const body = data.map((items, index) => {
        const row = items.fields.map((item) => {
          console.log(item);
          return <td>{item.value}</td>;
        });
        return (
          <tr>
            <td>{index}</td>
            {row}
          </tr>
        );
      });
      console.log(head, body);

      return { head, body };
    }
  };
  if (data.length) {
    table = createTable(data);
  }
  return (
    <>
      <div className='table-container'>
        {data.length && (
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
