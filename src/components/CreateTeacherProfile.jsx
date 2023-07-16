import React, { useState } from 'react';
import { Row, Col, Form, Button, Dropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addTeacher } from '../store/teacherSlice';

const CreateTeacherProfile = () => {

    const [position, setposition] = useState('Choose an option');
    const [name, setName] = useState('');
    const [nameBengali, setNameBengali] = useState('');
    const [department, setDepartment] = useState('');
    const dispatch = useDispatch();

    const history = useNavigate();

    const positionHandler = (e) => {
        setposition(e);
    }
    const nameHandler = (e) => {
        setName(e.target.value);
    }
    const phoneHandler = (e) => {
        setNameBengali(e.target.value);
    }

    const departmentNameHandler = (e) => {
        setDepartment(e.target.value);
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        dispatch(addTeacher({
            nameEnglish: name,
            nameBengali: nameBengali,
            department: department,
            rank: position
        })
        );

        history('/profile');
    }

    return (
        <div className='container' style={{ width: '50rem' }}>
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
                    <Button onClick={(event) => handleSignUp(event)} variant="primary" className='mt-4' type="submit">Add Teacher</Button>
                </div>
            </Form>

        </div>
    )
}

export default CreateTeacherProfile;