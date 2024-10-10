import Plot from 'react-plotly.js';

const SimpleRegressionGraph = ({ data, predictedPoints}) => {
    console.log("Predicted Points:", predictedPoints);
    return (
        <Plot
        data={[
            {
                x: data.map(point => point[0]), // Original x data
                y: data.map(point => point[1]), // Original y data
                mode: 'markers',
                type: 'scatter',
                name: 'Original Data',
                marker: { color: 'blue' },
            },
            {
                x: predictedPoints.map(point => point[0]), // Predicted x data
                y: predictedPoints.map(point => point[1]), // Predicted y data
                mode: 'lines',
                type: 'scatter',
                name: 'Regression Line',
                line: { color: 'red' },
            }
        ]}
        layout={{ 
            title: 'Simple Regression Graph',
            xaxis: { title: 'X values' },
            yaxis: { title: 'Y values' },
        }}
    />
);
};

export default SimpleRegressionGraph;
