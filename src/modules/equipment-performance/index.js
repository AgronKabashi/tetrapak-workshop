import React from "react";
import { connect } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import { bindActionCreators } from "redux";
import EquipmentPerformanceActions from "store/actions/equipment-performance";
import EquipmentSummary from "./equipment-summary";
import StopReasons from "./stop-reasons";
import equipmentPerformance from "store/actions/equipment-performance";

class EquipmentPerformance extends React.Component {
  componentWillMount () {
    this.props.actions.fetchData();
  }

  render () {
    const { match: { path }, equipmentSummary, stopReasons } = this.props;

    return (
      <div>
        <div className="navigation">
          <Link className="navigation-item" to={path}>Summary</Link>
          <Link className="navigation-item" to={`${path}/stopreasons`}>Stop Reasons</Link>
        </div>

        <Switch>
          <Route exact path={path} render={() => <EquipmentSummary {...equipmentSummary} />} />
          <Route exact path={`${path}/stopreasons`} render={() => <StopReasons {...stopReasons} />} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  ({ equipmentSummary, stopReasons }) => ({
    equipmentSummary,
    stopReasons
  }),
  dispatch => ({
    actions: bindActionCreators(EquipmentPerformanceActions, dispatch)
  })
)(EquipmentPerformance);
