import React from 'react';
import Plot from 'react-plotly.js';
import { evaluate } from 'mathjs';

const IntegrationGraph = ({ a, b, equation }) => {
    // Function to evaluate the equation
    const func = (x) => {
        try {
            return evaluate(equation, { x: x });
        } catch (err) {
            console.error("Error evaluating function:", err);
            return NaN; // Return NaN for invalid inputs
        }
    };

    // Check if a, b, or equation is invalid
    if (isNaN(a) || isNaN(b) || !equation) {
        return <div>Please provide valid a, b, and equation.</div>;
    }

    // Generate data for the graph
    const xValues = [];
    const yValues = [];
    const numPoints = 100; // Number of points for smoothness

    for (let i = a; i <= b; i += (b - a) / numPoints) {
        xValues.push(i);
        yValues.push(func(i));
    }

    return (
        <div style={{ width: '100%', height: '400px' , display:"flex" , justifyContent:"center"}}>
        <Plot
            data={[
                {
                    x: xValues,
                    y: yValues,
                    type: 'scatter',
                    mode: 'lines',
                    marker: { color: 'blue' },
                    name: 'f(x)', // Function line
                },
                {
                    x: [a, b, b, a],
                    y: [0, 0, func(b), func(a)],
                    fill: 'tozeroy',
                    type: 'scatter',
                    mode: 'none',
                    fillcolor: 'rgba(0, 100, 255, 0.3)', // Color of the area under the curve
                    name: 'Area under curve', // Area shaded under the curve
                },
            ]}
            layout={{
                title: `Integration of f(x) from ${a} to ${b}`,
                xaxis: {
                    title: 'x',
                    showgrid: true,
                    zeroline: true,
                },
                yaxis: {
                    title: 'f(x)',
                    showgrid: true,
                    zeroline: true,
                },
            }}
            config={{ responsive: true }}
        />
    </div>
    );
};

export default IntegrationGraph;
