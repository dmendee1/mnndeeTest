import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import tableStyle from "../../assets/jss/material-dashboard-react/components/tableStyle";
import { getOrders, getFilters } from '../../actions/orderActions';
import { connect } from 'react-redux';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable; 
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;

function onAfterDeleteRow(rowKeys) {
  alert('The rowkey you drop: ' + rowKeys);
}
const cellEditProp = {
  mode: 'click',
  blurToSave: true
};
const selectRowProp = {
  mode: 'checkbox'
};
const detailbtn = {
  mode: 'click'
}
class Order extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      exportCSVText: 'Эксел рүү хөрвүүлэх',
      afterDeleteRow: onAfterDeleteRow,
      deleteText: 'Устгах',
      clearSearch: true
    };
  }

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const { items } = this.props.item;
    return (
      <div className="table-responsive table-hover">
        <BootstrapTable data={ items } pagination={ true } deleteRow={ true } selectRow={ selectRowProp } search={true} options={ this.options } exportCSV>
          <TableHeaderColumn dataField='order_id' isKey width="10%" dataSort>Order ID</TableHeaderColumn>
          <TableHeaderColumn dataField='user_id' width="10%" dataSort>User ID</TableHeaderColumn>
          <TableHeaderColumn dataField='username' width="20%" dataSort>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='major' width="20%">Department</TableHeaderColumn>
          <TableHeaderColumn dataField='department' width="20%">Major</TableHeaderColumn>
          <TableHeaderColumn dataField='insertDate' width="15%">Date</TableHeaderColumn>
          <TableHeaderColumn dataField='' export={ false }>Action</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  filter: state.filter
});
export default connect(
  mapStateToProps,
  { getOrders, getFilters}
)(withStyles(tableStyle)(Order));