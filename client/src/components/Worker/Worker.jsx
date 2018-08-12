import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import tableStyle from "../../assets/jss/material-dashboard-react/components/tableStyle";
import { getWorkers } from '../../actions/workerActions';
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
  
class Worker extends React.Component {

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
    this.props.getWorkers();
  }

  render() {
    const { items } = this.props.item;
    return (
      <div>
        <BootstrapTable data={ items } pagination={ true } deleteRow={ true } selectRow={ selectRowProp } search={true} options={ this.options } exportCSV>
          <TableHeaderColumn dataField='user_id' isKey width="10%" dataSort>Ажилтаны ID</TableHeaderColumn>
          <TableHeaderColumn dataField='username' width="10%" dataSort>Нэр</TableHeaderColumn>
          <TableHeaderColumn dataField='major' width="15%">Мэргэжил</TableHeaderColumn>
          <TableHeaderColumn dataField='department' width="30%">Хэлтэс</TableHeaderColumn>
          <TableHeaderColumn dataField='insertDate' width="25%">Бүртгэсэн огноо</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});
export default connect(
  mapStateToProps,
  { getWorkers}
)(withStyles(tableStyle)(Worker));