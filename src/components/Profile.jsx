import React, { useEffect } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchTeachers, getTeacher } from '../store/teacherApiSlice'

const Profile = () => {

  const teacher = useSelector(state => state.teacher)
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(fetchTeachers())
  // }, [])

  return (
    <Container>
      <Row>
        {teacher.map((teacher, index) => (
          <Col key={index} md={6}>
            <Card className='mt-4'>
              <Card.Body>
                <Card.Title>{teacher.nameEnglish}</Card.Title>
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