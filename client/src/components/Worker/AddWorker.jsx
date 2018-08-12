import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  FormGroup,
  Input
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addWorker } from '../../actions/workerActions';
import { connect } from 'react-redux';

class AddWorker extends Component {
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
      user_id: this.state.user_id,
      lastname: this.state.lastname,
      department: this.state.department,
      major: this.state.major,
      username: this.state.username,
      password: this.state.password
    };

    // Add item via addItem action
    this.props.addWorker(newItem);
    console.log(newItem);

    // Close modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="info"
          style={{ marginBottom: '2rem' }}
          onClick={this.toggle}
        >
          Add Worker
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add Order</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="item">Ажилтаны ID</Label>
                <Input
                  type="text"
                  name="user_id"
                  id="item"
                  placeholder="Ажилтаны ID"
                  onChange={this.onChange}
                />
                <Label for="item">Нэр</Label>
                <Input
                  type="text"
                  name="lastname"
                  id="item"
                  placeholder="Нэр"
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
                <Label for="item">Нэвтрэх нэр</Label>
                <Input
                  type="text"
                  name="username"
                  id="item"
                  placeholder="Нэвтрэх нэр"
                  onChange={this.onChange}
                />
                <Label for="item">Нууц үг</Label>
                <Input
                  type="password"
                  name="password"
                  id="item"
                  placeholder="Нууц үг"
                  onChange={this.onChange}
                />
                <Button color="dark" style={{ marginTop: '2rem' }} block>
                  Ажилтан нэмэх
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
  { addWorker }
)(AddWorker);