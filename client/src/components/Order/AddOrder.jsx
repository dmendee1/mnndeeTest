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

class AddOrder extends Component {
  state = {
    modal: false,
    name: ''
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newItem = {
      order_id: this.state.order_id,
      user_id: this.state.user_id,
      username: this.state.username,
      major: this.state.major,
      department: this.state.department
    };

    // Add item via addItem action
    this.props.addOrder(newItem);
    console.log(newItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Item
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Order</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Захиалгын дугаар</Label>
                <Input
                  type="text"
                  name="order_id"
                  id="item"
                  placeholder="Захиалгын дугаар"
                  onChange={this.onChange}
                />
                <Label for="item">Ажилтаны ID</Label>
                <Input
                  type="text"
                  name="user_id"
                  id="item"
                  placeholder="Ажилтаны ID"
                  onChange={this.onChange}
                />
                <Label for="item">Ажилтны нэр</Label>
                <Input
                  type="text"
                  name="username"
                  id="item"
                  placeholder="Ажилтаны нэр"
                  onChange={this.onChange}
                />
                <Label for="item">Хэлтэс</Label>
                <Input
                  type="text"
                  name="department"
                  id="item"
                  placeholder="Хэлтэс"
                  onChange={this.onChange}
                />
                <Label for="item">Албан тушаал</Label>
                <Input
                  type="text"
                  name="major"
                  id="item"
                  placeholder="Албан тушаал"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Захиалга Нэмэх
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { addOrder }
)(AddOrder);