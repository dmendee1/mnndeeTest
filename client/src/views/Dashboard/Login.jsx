import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addOrder } from '../../actions/orderActions';
import { connect } from 'react-redux';
import withStyles from "@material-ui/core/styles/withStyles";
import avatar from "../../assets/img/faces/marc.jpg";
  
const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    color: "#f00"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
class Login extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.typo}>
          <h1>Нэвтрэх Хуудас</h1>
        </div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="item">Нэвтрэх нэр</Label>
            <Input
              type="text"
              name="order_id"
              id="item"
              placeholder="Нэвтрэх нэр"
              onChange={this.onChange}
            />
            <Label for="item">Нууц үг</Label>
            <Input
              type="password"
              name="user_id"
              id="item"
              placeholder="Нууц үг"
              onChange={this.onChange}
            />
            <Button color="dark" style={{ marginTop: '2rem' }} block>
              Захиалга Нэмэх
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default withStyles(style)(Login);
