
const Table = ({
  data,
  headers,
  toggleModal,
  renderRow, 
}) => {
  // Reusable classes
 const cellAlignClass = "py-3 px-4 text-left text-sm";
  return (
    <table className="w-full relative overflow-x-auto mt-7 whitespace-nowrap">
      <thead className="bg-gray">
        <tr className="text-left text-sm text-black/80">
          {headers.map((header, index) => (
            <th key={index} className={cellAlignClass}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((singleData, index) =>
          // Use the renderRow function to render each row
          renderRow(singleData, index)
        )}
      </tbody>
    </table>
  );
};

export default Table;
