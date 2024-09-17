import { tableNames } from "../configs/tableNames.config";
function Table() {
  return (
    <table className="table">
      <thead className="table__header">
        <tr className="table__row">
          {tableNames.map((name, index) => (
            <th className="table__th" key={index}>
              {name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr className="table__counter">
          <td>1</td>
          <td>22</td>
          <td>3 3</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
