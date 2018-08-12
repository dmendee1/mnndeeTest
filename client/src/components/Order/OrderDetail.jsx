import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "../CustomButtons/Button.jsx";
import CustomInput from "../CustomInput/CustomInput.jsx";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead"
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import tableStyle from "../../assets/jss/material-dashboard-react/components/tableStyle";
import axios from 'axios';
import { getOrders, deleteOrder } from '../../actions/orderActions';
import { connect } from 'react-redux';

var ReactBsTable  = require('react-bootstrap-table');
var BootstrapTable = ReactBsTable.BootstrapTable; 
var TableHeaderColumn = ReactBsTable.TableHeaderColumn;
var InsertButton = ReactBsTable.InsertButton;

const styles = {
  addRowOfTable: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "10px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const cellEditProp = {
  mode: 'click',
  blurToSave: true
};

  
class Order extends React.Component {

  componentDidMount() {
    this.props.getOrders();
  }

  render() {
    const { items } = this.props.item;
    return (
      <div className="table-responsive table-hover">
        <BootstrapTable data={ items } pagination={ true } search={true}>
          <TableHeaderColumn width="5%">#</TableHeaderColumn>
          <TableHeaderColumn dataField='order_id' isKey width="10%" dataSort>Order ID</TableHeaderColumn>
          <TableHeaderColumn dataField='user_id' width="10%" dataSort>User ID</TableHeaderColumn>
          <TableHeaderColumn dataField='username' width="20%" dataSort>Username</TableHeaderColumn>
          <TableHeaderColumn dataField='major' width="20%">Department</TableHeaderColumn>
          <TableHeaderColumn dataField='department' width="20%">Major</TableHeaderColumn>
          <TableHeaderColumn dataField='insertDate' width="15%">Date</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  classes: PropTypes.object.isRequired,
  editEnable: PropTypes.oneOf([
    "cellEdit={ cellEditProp }",
    ""
  ]),
  deleteEnable: PropTypes.oneOf([
    "cellEdit={ cellEditProp }",
    ""
  ]),
  addEnable: PropTypes.oneOf([
    "cellEdit={ cellEditProp }",
    ""
  ]),
});
export default connect(
  mapStateToProps,
  { getOrders, deleteOrder}
)(withStyles(tableStyle)(Order));