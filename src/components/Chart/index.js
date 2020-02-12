import React, {
  useRef, createRef, useEffect, useState,
} from 'react';
import Chart from 'chart.js';
import PropTypes from 'prop-types';

const ChartComponent = ({ type, data, options }) => {
  const canvas = useRef(createRef());
  const [chart, setChart] = useState(null);

  useEffect(() => {
    const canvasRef = canvas.current.getContext('2d');
    // eslint-disable-next-line no-new
    setChart(new Chart(canvasRef, { type, data, options }));
  }, []);

  useEffect(() => {
    const canvasRef = canvas.current.getContext('2d');
    setChart(new Chart(canvasRef, { type, data, options }));
  }, [data]);

  return (
    <canvas ref={canvas} />
  );
};

ChartComponent.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ChartComponent;
