import React, { useState } from 'react';
import { Row, Col, Form, Button, Dropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CreateTeacherProfile = () => {

    const [position, setposition] = useState('Choose an option');
    const [loading, setLoading] = useState(false);
    let name;
    let nameBengali;
    let departmentName;

    const history = useNavigate();

    const positionHandler = (e) => {
        setposition(e);
    }

    const nameHandler = (e) => {
        name = e.target.value;
    }


    const phoneHandler = (e) => {
        nameBengali = e.target.value;
    }

    const departmentNameHandler = (e) => {
        departmentName = e.target.value;
    }

    const saveToLocal = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const handleSignUp = async () => {

        // if (password === confirmPassword) {
        //     setLoading(true);
        //     // saveToLocal('name', name);
        //     // saveToLocal('email', email);
        //     // saveToLocal('phone', phone);
        //     // saveToLocal('position', position);
        //     // saveToLocal('password', password);
        //     // saveToLocal('departmentName', departmentName);
        //     // setTimeout(() => {
        //     //     history('/profile');
        //     // }, 100);
        //     history('/profile');
        //     setLoading(false);
        // } else {
        //     alert('Password does not match');
        //     setLoading(false);
        // }
    }


    return (
        <div className='container' style={{width: '50rem'}}>
            <h1 className='text-center pt-4 pb-4'>শিক্ষকদের প্রোফাইল তৈরী করুন</h1>
            <Form className=' border border-secondary p-3 rounded' >
                <Form.Group>
                    <Form.Label>নাম (ইংরেজীতে) </Form.Label>
                    <Form.Control onChange={(e) => nameHandler(e)} type="text" placeholder="ইংরেজীতে নাম লিখুন" />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label> নাম (বাংলায়) </Form.Label>
                    <Form.Control onChange={(e) => phoneHandler(e)} type="text" placeholder="বাংলায় নাম লিখুন" />
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>বিভাগের নাম</Form.Label>
                    <Form.Control onChange={(e) => departmentNameHandler(e)} type="text" placeholder="বিভাগের নাম লিখুন" />
                </Form.Group>
                <Row className='mt-4'>
                    <Col>
                        <Form.Label>ডিপার্টমেন্টে পদবী নির্বাচন করুন?</Form.Label>
                    </Col>
                    <Col className='d-flex justify-content-end'>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {position}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => positionHandler("Professor Emeritus")}>Chairman</Dropdown.Item>
                                <Dropdown.Item onClick={() => positionHandler("Proffessor")}>Proffessor</Dropdown.Item>
                                <Dropdown.Item onClick={() => positionHandler("Assosiate Proffessor")}>Assosiate Proffessor</Dropdown.Item>
                                <Dropdown.Item onClick={() => positionHandler("Assistant Proffessor")}>Assistant Proffessor</Dropdown.Item>
                                <Dropdown.Item onClick={() => positionHandler("Lecturer")}>Lecturer</Dropdown.Item>
                                {/* <Dropdown.Item>Chairman</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                </Row>

                <div className='text-center'>
                    <Button onClick={handleSignUp} variant="primary" className='mt-4' type="submit">{loading ? 'Loading' : 'Submit'}</Button>
                    {
                        loading ? <Container className='text-center mt-3'>
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </Container> : null
                    }
                </div>
            </Form>

            <Row className='py-3 text-center '>
                <Col className='text-white'>
                    Already have any account?{' '}
                    <Link to={'/login'}>
                        Login
                    </Link>
                </Col>
            </Row>

        </div>
    )
}

export default CreateTeacherProfile;