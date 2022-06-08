import React from 'react'
import {Form,Button,Container,Card,Col} from 'react-bootstrap'

const Posts = () => {
  return (
    <div>
          <Container className='pt-5'>
          <Card style={{ width: '18rem' }}>
  
  <Card.Body>
    <Card.Title>Designation</Card.Title>
    <Card.Text>
      Name
    </Card.Text>
    <Card.Text>
      Date
    </Card.Text>
    <Card.Text>
      Reminder
    </Card.Text>

  </Card.Body>
</Card>
  </Container></div>
  )
}

export default Posts