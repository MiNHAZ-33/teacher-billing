import { React, useState, useEffect } from 'react'
import { Container, Form, Button, Dropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTeachers } from '../store/teacherApiSlice'

const TeacherDetails = () => {

    const [name, setName] = useState('');
    const [nameBengali, setNameBengali] = useState('');
    const [rank, setRank] = useState('');
    const [department, setDepartment] = useState('');

    const teacher = useSelector(state => state.teacher)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(fetchTeachers())
    // }, [])

    const nameHandler = (value) => {
        setName(value);
        const selectedTeacher = teacher.find(teacher => teacher.nameEnglish === value);
        setNameBengali(selectedTeacher.nameBengali);
        setRank(selectedTeacher.rank);
        setDepartment(selectedTeacher.department);
    }

    return (
        <Container className='w-4' style={{ width: "60rem" }}>
            <h1 className='text-center'>শিক্ষকের বিবরণ</h1>
            <Form >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>নাম</Form.Label>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                            {name ? name : 'Select Your Name'}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {teacher.map((teacher) => (
                                <Dropdown.Item key={teacher.nameEnglish} onClick={() => nameHandler(teacher.nameEnglish)} >{teacher.nameEnglish}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>নাম বাংলায়</Form.Label>
                    <Form.Control type="text" value={nameBengali} placeholder="বাংলায় নাম লিখুন" readOnly />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>পদবী</Form.Label>
                    <Form.Control type="text" value={rank} placeholder="Enter Rank" readOnly />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>ঠিকানা / বিভাগ</Form.Label>
                    <Form.Control type="text" value={department} placeholder="Enter Department Name" read />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>তত্বীয় (ঘন্টায়) </Form.Label>
                    <Form.Control type="number" placeholder="Enter theory exam length" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>ব্যবহারিক (ঘন্টায়) </Form.Label>
                    <Form.Control type="number" placeholder="Enter lab exam length" />
                </Form.Group>

            </Form>
        </Container>
    )
}

export default TeacherDetails