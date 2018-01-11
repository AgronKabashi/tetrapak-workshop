import React from "react";

const KpiCard = ({ shortName, value }) =>
  <div className="kpi-card">
    <span>{shortName}</span>
    <span className="value">{~~value}%</span>
  </div>;

export default KpiCard;
