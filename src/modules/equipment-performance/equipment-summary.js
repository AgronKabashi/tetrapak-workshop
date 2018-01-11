import React from "react";
import classnames from "classnames";
import KpiKard from "./kpi-card";
import TimeSummary from "./time-summary";
import ProductionSummary from "./production-summary";

const EquipmentSummary = ({ kpiData, timeSummary, productionSummary, isLoading }) =>
  <div className={classnames("equipment-summary", { isLoading })}>
    <h2>Summary</h2>
    <div className="kpis">
      {kpiData.map(kpi => <KpiKard key={kpi.kpiId} {...kpi} />)}
    </div>
    <div className="summary-container">
      <ProductionSummary {...productionSummary} />
      <TimeSummary {...timeSummary} />
    </div>
  </div>;

export default EquipmentSummary;
