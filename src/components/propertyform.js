import React, {useRef, useState} from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RealEstateForm = (props) => {

  const[has_basement, setHasBasement] = useState()

  const handleChange = event => {
    setHasBasement(event.target.value);
  };

const title = useRef();
const address = useRef();
const year_built = useRef();
const price = useRef();
const square_feet = useRef();
const bedroom_count = useRef();
const bathroom_count = useRef();
const date_listed = useRef();


const handleCreate = e => {
  e.preventDefault();

  const newProperty = {

      
      title: title.current.value,
      address: address.current.value,
      year_built: year_built.current.value,
      price: price.current.value,
      square_feet: square_feet.current.value,
      bedroom_count: bedroom_count.current.value,
      bathroom_count: bathroom_count.current.value,
      has_basement: JSON.parse(has_basement),
      date_listed: date_listed.current.value
  }

  createNewProperty(newProperty).then(() => props.history.push("/"))
}

const createNewProperty = newProperty => {
  return fetch("http://localhost:8000/properties", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      
      
    },
    body: JSON.stringify(newProperty)
  }).then(res => res.json());
};



  return (
    <Form className="p-4">
      <div className="border-form">
      <Row form className="p-3 d-flex justify-content-center">
        <Col md={6}>
          <FormGroup>
            <Label for="exampleEmail">Title</Label>
            <Input  innerRef={title}  type="text" name="title" id="title" placeholder="Enter a title" />
          </FormGroup>
        </Col>  
      </Row>
      <Row form className="p-3 d-flex justify-content-center">
        <Col md={6}>
          <FormGroup>
            <Label for="examplePassword">Address</Label>
            <Input innerRef={address} type="text" name="address" id="address" placeholder="Address" />
          </FormGroup>
        </Col>
      </Row>
      <Row form className="d-flex justify-content-around">
        <Col md={4}>
          <FormGroup>
            <Label for="datelisted">Date Listed</Label>
            <Input innerRef={date_listed} type="text" name="datelisted" id="datelisted" placeholder="When was this date listed?" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="price">Price</Label>
            <Input innerRef={price} type="text" name="price" id="price" placeholder="Enter a Price" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="squarefeet">Square Feet</Label>
            <Input  innerRef={square_feet} type="text"  name="squarefeet" id="squarefeet" placeholder="Enter Square Footage" />
          </FormGroup>
        </Col>
      </Row>
      <Row form className=" p-3 d-flex justify-content-between">
        <Col md={3}>
          <FormGroup>
            <Label for="year">Year Built</Label>
            <Input innerRef={year_built} type="text"  name="year" id="year" placeholder="Enter a Year" />
          </FormGroup>
        </Col>
        <Col md={3}>
        <FormGroup>
        <Label for="has_basement">Basement?</Label>
        <Input type="select" value={has_basement} onChange={handleChange} name="has_basement" id="has_basement">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </Input>
      </FormGroup>
      </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="bedroomcount">Bedroom Count</Label>
            <Input type="text" innerRef={bedroom_count} name="bedroomcount" id="bedroomcount" placeholder="Enter Number of Bedrooms" />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="bathroomcount">Bathroom Count</Label>
            <Input type="text" innerRef={bathroom_count} name="bathroom" id="bathroom" placeholder="How many Bathrooms" />
          </FormGroup>
        </Col>
      </Row>
      
      <div className=" d-flex justify-content-center mb-2">
      <Button onClick={handleCreate} >Submit</Button>
      </div>
      </div>
    </Form>
  );
}

export default RealEstateForm;