const ExtrapolationInput = ({ x, setx, y, sety, setsize, setxvalue , setmOrder}) => {
    const handleXChange = (value, row) => {
      const updateX = x.map((val, rowIndex) => {
        if (rowIndex === row) {
          const parsedValue = parseFloat(value);
          return isNaN(parsedValue) ? 0 : parsedValue;
        }
        return val;
      });
      setx(updateX);
    };
  
    const renderX = () => {
      return x.map((_, index) => (
        <div key={index}>
          <input
            className="text-center border h-20 mb-3 rounded-lg"
            type="number"
            placeholder={`x${index + 1}`}
            onChange={(e) => handleXChange(e.target.value, index)}
          />
        </div>
      ));
    };
  
    const handleYChange = (value, row) => {
      const updateY = y.map((val, rowIndex) => {
        if (rowIndex === row) {
          const parsedValue = parseFloat(value);
          return isNaN(parsedValue) ? 0 : parsedValue;
        }
        return val;
      });
      sety(updateY);
    };
  
    const renderY = () => {
      return y.map((_, index) => (
        <div key={index}>
          <input
            className="text-center border h-20 mb-3 rounded-lg"
            type="number"
            placeholder={`f(X${index + 1})`}
            onChange={(e) => handleYChange(e.target.value, index)}
          />
        </div>
      ));
    };
  
    return (
      <div className="flex flex-col justify-center items-center w-auto">
        <div className="flex justify-between">
          <div className="mr-5">
            <p className="text-center">size</p>
            <input
              className="p-2 border rounded-lg border-green-500"
              type="text"
              placeholder="input size"
              onChange={(e) => setsize(parseInt(e.target.value))}
            />
          </div>
          <div>
            <p className="text-center">X value</p>
            <input
              className="p-2 border rounded-lg border-red-500"
              type="text"
              placeholder="x value"
              onChange={(e) => setxvalue(parseFloat(e.target.value))}
            />
          </div>
          <div className="ml-5">
            <p className="text-center">M order</p>
            <input
              className="p-2 border rounded-lg border-blue-500"
              type="text"
              placeholder="x value"
              onChange={(e) => setmOrder(parseFloat(e.target.value))}
            />
          </div>
        </div>
        <div className="mt-5 flex gap-5">
          <div>{renderX()}</div>
          <div>{renderY()}</div>
        </div>
      </div>
    );
  };
  
  export default ExtrapolationInput;
  