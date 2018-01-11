import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import classnames from "classnames";
import FilterActions from "store/actions/filter";

const Filter = ({ period, actions }) =>
  <div>
    <button className={classnames({ active: period === "lastWeek" })} onClick={() => actions.setFilterPeriod("lastWeek")}>Last Week</button>
    <button className={classnames({ active: period === "lastMonth" })} onClick={() => actions.setFilterPeriod("lastMonth")}>Last month</button>
  </div>;

export default connect(
  ({ filter }) => ({
    period: filter.period
  }),
  dispatch => ({ actions: bindActionCreators(FilterActions, dispatch) })
)(Filter);
