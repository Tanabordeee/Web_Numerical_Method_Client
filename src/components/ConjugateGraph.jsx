import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import { matrix } from "mathjs";

const ConjugateGraph = ({ data, type, result }) => {
  const [steps, setSteps] = useState([]);
  const { matrixA, arrB } = data;

  // Ensure matrixA and arrB are arrays
  if (!Array.isArray(matrixA) || !Array.isArray(arrB)) {
    console.error("matrixA or arrB is not an array:", matrixA, arrB);
    return <div>Error: Invalid data format</div>; 
  }

  const calculateFx = (x, y, matrixA, arrB) => {
    const a = matrixA[0][0];
    const b = matrixA[0][1];
    const c = matrixA[1][0];
    const d = matrixA[1][1];

    const e = arrB[0];
    const f = arrB[1];

    const result = 0.5 * (x * (a * x + y * c) + y * (x * b + y * d)) - e * x - f * y;

    return result;
  };

  useEffect(() => {
    if (result && result.iterations) {
      const updatedSteps = result.iterations
        .filter(item => item.x && item.x.length >= 2)
        .map(item => {
          const x = matrix(item.x).toArray();
          return {
            x: Number(x[0]),
            y: Number(x[1]),
            z: calculateFx(Number(x[0]), Number(x[1]), data.matrixA, data.arrB),
          };
        });
      setSteps(updatedSteps);
    }
  }, [result, data.matrixA, data.arrB]);

  const finalX = result?.result?.x ? matrix(result.result.x).toArray() : [0, 0];
  const xValues = [...Array(100).keys()].map((i) => -10 + i * 0.2);
  const yValues = [...Array(100).keys()].map((i) => -10 + i * 0.2);
  const zValues = xValues.map((x) =>
    yValues.map((y) => calculateFx(x, y, data.matrixA, data.arrB))
  );

  const graphData = [
    {
      x: steps.map((s) => s.x),
      y: steps.map((s) => s.y),
      z: steps.map((s) => s.z),
      mode: "lines+markers",
      type: type === "2D" ? "scatter" : "scatter3d",
      marker: {
        symbol: type === "2D" ? "arrow" : "circle-open-dot",
        size: type === "2D" ? 10 : 5,
        angleref: "previous",
        standoff: 3,
      },
      line: {
        color: "red",
        width: 2,
      },
      name: `Iterations`,
    },
    {
      x: [Number(finalX[0])],
      y: [Number(finalX[1])],
      z: [
        calculateFx(
          Number(finalX[0]),
          Number(finalX[1]),
          data.matrixA,
          data.arrB
        ),
      ],
      mode: "markers",
      type: type === "2D" ? "scatter" : "scatter3d",
      marker: {
        color: "#ffffff",
        size: 10,
      },
      name: "Final Result",
    },
  ];

  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Plot
        className="w-full h-full justify-center items-center"
        data={[
          {
            z: zValues,
            x: xValues,
            y: yValues,
            type: type === "2D" ? "contour" : "surface",
            colorscale: "Jet",
          },
          ...graphData,
        ]}
        layout={{
          scene: {
            xaxis: { title: "X Axis" },
            yaxis: { title: "Y Axis" },
            zaxis: { title: "Z Axis" },
          },
          dragmode: type === "3D" ? "orbit" : "pan",
          margin: { t: 0, r: 0 },
          autosize: true,
        }}
        config={{
          scrollZoom: true,
        }}
      />
    </div>
  );
};

export default ConjugateGraph;