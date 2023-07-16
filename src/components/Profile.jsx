import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile = () => {

  const teacher = [
    {
      name: 'Subir Saha',
      nameBengali: 'সুবীর সাহা',
      department: 'Comuputer Science and Engineering',
      rank: 'Assistant Professor',
    },
    {
      name: 'Nitun Poddar',
      nameBengali: 'নিতুন পোদ্দার',
      department: 'Electronice and Electrical Engineering',
      rank: 'Lecturer',
    },
    {
      name: 'Rafiqul Islam',
      nameBengali: 'রফিকুল ইসলাম',
      department: 'Mathematics',
      rank: 'Associate Professor',
    },
    {
      name: 'Arif Ahmed',
      nameBengali: 'আরিফ আহমেদ',
      department: 'Comuputer Science and Engineering',
      rank: 'Assistant Professor',
    },
  ]

  return (
    <Container>

      <Row>
        {teacher.map((teacher, index) => (
          <Col key={index} md={6}>
            <Card className='mt-4'>
              <Card.Body>
                <Card.Title>{teacher.name}</Card.Title>
                <Card.Text>
                  {teacher.nameBengali}<br />
                  {teacher.department}<br />
                  {teacher.rank}
                </Card.Text>
                <Button variant="primary">Edit</Button>
                <Button className='m-2' variant="danger">Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Link to="/createprofile" >
        <Button className='m-2' variant='success' >Add New Teacher</Button>
      </Link>
    </Container>
  )
}

export default Profile