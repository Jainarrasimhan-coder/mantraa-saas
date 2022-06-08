import React from 'react'
import {Form,Button,Container,Row,Col} from 'react-bootstrap'

const Forms = () => {
  return (
    <Container className='pt-5'><Form>
    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
      <Form.Label column sm={2}>
        Email
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="Name"  />
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} className="mb-3" >
      <Form.Label column sm={2}>
Designation
      </Form.Label>
      <Col sm={10}>
        <Form.Control type="designation"  />
      </Col>
    </Form.Group>
       <Form.Group as={Row} className="mb-3">
      <Row>
        <Form.Label as="legend" column sm={2}>
          Days
        </Form.Label>
      
            <Col column sm={2} className="mb-3 pt-2">
            <Form.Select aria-label="Default select example">
  <option>Day</option>
  <option value="1">Day</option>
  <option value="2">Week</option>
  <option value="3">Month</option>
</Form.Select>
                      </Col>
<Col column sm={2}className="mb-3 pt-2"> 
<Form.Select aria-label="Default select example">
  <option>05</option>
  <option value="1">01</option>
  <option value="2">02</option>
  <option value="3">03</option>
</Form.Select>
</Col>
           
        </Row>
      </Form.Group>
    <fieldset>
      <Form.Group as={Row} className="mb-3">
      <Row>
        <Form.Label as="legend" column sm={2}>
          Reminder
        </Form.Label>
      
            <Col column sm={2} className="mb-3 pt-2">
            <Form.Check
            type="radio"
            label="Yes"
            name="Yes"
            id="formHorizontalRadios1"
          />
                      </Col>
<Col column sm={2}className="mb-3 pt-2"> <Form.Check
            type="radio"
            label="No"
            name="No"
            id="formHorizontalRadios2"
          />
</Col>
         
         
            
          
        
        </Row>
      </Form.Group>
    </fieldset>
  
  
    <Form.Group as={Row} className="mb-3">
      <Col sm={{ span: 10, offset: 2 }}>
        <Button type="submit">Submit</Button>
      </Col>
    </Form.Group>
  </Form></Container>
  )
}

export default Forms