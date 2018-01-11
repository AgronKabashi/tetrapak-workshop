import React from "react";

const TimeSummary = ({ productionTime, stopTime, timeKpiName, timeKpiDescription, timeKpiValue }) =>
  <div className="time-summary summary-container">
    <h2>Time</h2>
    <div className="summary-column">
      <span>Production Time</span>
      {productionTime}
    </div>
    <div className="summary-column">
      <span>Stop Time</span>
      {stopTime}
    </div>
    <div className="summary-column">
      <span>MTBF</span>
      {timeKpiValue}
    </div>
  </div>;

export default TimeSummary;
