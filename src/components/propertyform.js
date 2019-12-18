import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RealEstateForm = (props) => {
  return (
    <Form className="p-4">
      <div className="border-form">
      <Row form className="p-3 d-flex justify-content-center">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Enter a title" />
          </FormGroup>
        </Col>  
      </Row>
      <Row form className="p-3 d-flex justify-content-center">
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input type="text" name="address" id="address" placeholder="Address" />
          </FormGroup>
        </Col>
      </Row>
      <Row form className="d-flex justify-content-around">
        <Col md={4}>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Enter a title" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input type="text" name="address" id="address" placeholder="Address" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input type="text" name="address" id="address" placeholder="Address" />
          </FormGroup>
        </Col>
      </Row>
      <Row form className=" p-3 d-flex justify-content-between">
        <Col md={3}>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input type="text" name="title" id="title" placeholder="Enter a title" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input type="text" name="address" id="address" placeholder="Address" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input type="text" name="address" id="address" placeholder="Address" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input type="text" name="address" id="address" placeholder="Address" />
          </FormGroup>
        </Col>
      </Row>
      
      <div className=" d-flex justify-content-center mb-2">
      <Button >Submit</Button>
      </div>
      </div>
    </Form>
  );
}

export default RealEstateForm;