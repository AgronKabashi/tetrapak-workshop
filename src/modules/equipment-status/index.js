import React from "react";
import { Link } from "react-router-dom";

class EquipmentStatus extends React.Component {
  render () {
    return (
      <div>
        EquipmentStatus<br />
        <Link to="/equipmentperformance">Go to EquipmentPerformance</Link>
      </div>
    );
  }
}

export default EquipmentStatus;
