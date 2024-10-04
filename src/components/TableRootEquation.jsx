const TableRootEquation = ({result , method}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-slate-200 w-full p-4">
        <table className="table-auto border-separate border-spacing-2 w-full">
          <thead>
            <tr className="bg-grey text-zinc-950">
              <th className="p-5 border border-black">Iteration</th>
              <th className="p-5 border border-black">Xk</th>
              {method != "OnePoint" && <th className="p-5 border border-black">Yk</th>}
              <th className="p-5 border border-black">error</th>
            </tr>
          </thead>
          <tbody className="bg-lightgrey text-center">
            {result && result.length > 0 ? (
              result.map((res, index) => (
                <tr key={index}>
                  <td className="p-5 border border-black">{index + 1}</td>
                  <td className="p-5 border border-black">{res.resultX}</td>
                  {method != "OnePoint" && <td className="p-5 border border-black">{res.funcXright}</td>}
                  <td className="p-5 border border-black">{res.check}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-2xl m-1">
                  No Results Available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default TableRootEquation;