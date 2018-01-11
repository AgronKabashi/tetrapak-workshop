import React from "react";

const ProductionSummary = ({ primaryPackagesOut, waste, totalWastePercent }) =>
  <div className="production-summary summary-container">
    <h2>Production</h2>
    <div className="summary-column">
      <span>Primary Packages Out</span>
      {primaryPackagesOut}
    </div>
    <div className="summary-column">
      <span>Waste</span>
      {waste}
    </div>
    <div className="summary-column">
      <span>Waste (%)</span>
      {totalWastePercent}
    </div>
  </div>;

export default ProductionSummary;
