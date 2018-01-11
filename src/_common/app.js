import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Filter from "./filter";
import EquipmentPerformance from "modules/equipment-performance";
import EquipmentStatus from "modules/equipment-status";

const App = () =>
  <div>
    <Filter />
    <Router>
      <Switch>
        <Route path="/equipmentstatus" component={EquipmentStatus} />
        <Route path="/equipmentperformance" component={EquipmentPerformance} />
        <Redirect to="/equipmentperformance" />
      </Switch>
    </Router>
  </div>;

export default App;
