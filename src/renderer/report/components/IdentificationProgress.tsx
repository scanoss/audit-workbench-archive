import React, { useEffect, useState } from 'react';
import { Chart } from 'chart.js';

const LicensesChart = ({ data }) => {
  const chartRef = React.createRef<any>();
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    const percentage = Math.floor((data?.identifiedFiles + data?.ignoredFiles)*100 / data.detectedFiles) ;
    const pending = 100 - percentage;
    setPercentage(percentage);

    const chart = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: [`${percentage}%`],
        datasets: [
          {
            label: '',
            data: [percentage],
            borderWidth: 0,
            backgroundColor: ['#22C55E'],
            barThickness: 42,
          },
          {
            label: 'Identified',
            data: [pending],
            borderWidth: 0,
            backgroundColor: ['#F97316'],
            barThickness: 42,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        indexAxis: 'y',
        scales: {
          y: {
            stacked: true,
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: false,
            },
            display: false,
          },
          x: {
            stacked: true,
            beginAtZero: true,
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label() {
                return (``);
              },
              title() {
                return (`Pending files\n${data?.pendingFiles}`);
              }
            },
            displayColors: false,
          },
          legend: {
            display: false,
            labels: {
              boxWidth: 0,
            },
          },
        },
      },
    });

    return () => chart.destroy();
  }, [data]);

  return (
    <div className="IdentificationProgress">
      <div className="report-titles-container">
        <span className="report-titles">Identification Progress</span>
      </div>
      <div className="identification-canvas-container">
        <span className="label">{percentage}%</span>
        <div className="progress-bar">
          <canvas ref={chartRef} />
        </div>
      </div>
      <div className="total-files-container">
        <span className="total-files-label">Total Files: {data.totalFiles}</span>
      </div>
    </div>
  );
};

export default LicensesChart;
