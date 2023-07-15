import { React, useState } from 'react'
import { Card, Col, Container, Form, Row, Dropdown } from 'react-bootstrap'

const ExamDetails = () => {

    const examNames = ['BSc Engineering', 'MSc Engineering', 'BBA', 'Bachelor of Science']
    const examYears = ['2017', '2018', '2019', '2020', '2021', '2022', '2023']
    const tabulations = ['1st year', '2nd year', '3rd year', '4th year']
    const [studentNumber, setStudentNumber] = useState({
        baseStudent: 0,
        classTest: 0,
        semesterFinalThree: 0,
        semesterFinalFour: 0,
        viva: 0,
        labStudent: 0,
        tabulationStudent: 0
    })

    const [paperNumber, setPaperNumber] = useState({
        theoryPaper: 0,
        classTest: 0,
        moderation: 0,
        labPaper: 0,
        reportPaper: 0,
        surveyNumber: 0,
    })

    const [hour, setHour] = useState({
        theory: 0,
        practical: 0,
        examineerLabHour: 0,
    })

    const [examName, setExamName] = useState('')
    const [examYear, setExamYear] = useState('')
    const [tabulation, setTabulation] = useState('')

    const examNameHandler = (name) => {
        setExamName(name)
    }

    let totalAmounts;

    const examYearHandler = (year) => {
        setExamYear(year)
    }

    const tabulationHandler = (tabulation) => {
        setTabulation(tabulation)
    }

    const textInputHandler = (name, value) => {
        setStudentNumber({ ...studentNumber, [name]: value })
        console.log(studentNumber.classTest)
    }

    const paperInputHandler = (name, value) => {
        setPaperNumber({ ...paperNumber, [name]: value })
        console.log(paperNumber.classTest)
    }

    const hourInputHandler = (name, value) => {
        setHour({ ...hour, [name]: value })
        console.log(hour.theory)
    }



    return (
        <Container>
            <h2 className='text-center p-2'>পরীক্ষা সংক্রান্ত কাজের বিবরণ</h2>
            <Form>
                <Card> {/* Questiion making component*/}
                    <Card.Body>
                        <Card.Title className='text-center pb-2'>প্রশ্নপত্র করণ</Card.Title>
                        <Row className='mb-3'>
                            <Col>
                                <h6 className='pt-2'>পরীক্ষার নাম</h6>

                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {examName ? examName : 'Select exam name'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='w-100'>
                                        {examNames.map((name, index) => {
                                            return (
                                                <Dropdown.Item key={index} onClick={() => examNameHandler(name)}>{name}</Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>বৎসর</h6>

                            </Col>
                            <Col>
                                <Dropdown >
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {examYear ? examYear : 'Select exam name'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        {examYears.map((name, index) => {
                                            return (
                                                <Dropdown.Item key={index} onClick={() => examYearHandler(name)}>{name}</Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            {/* <Col>
                                <input></input>
                            </Col> */}

                            <Col>
                                <h6 className='pt-2'>বিষয়</h6>

                            </Col>
                            <Col>
                                <input></input>
                            </Col>

                            {/* <Col>
                                <input></input>
                            </Col> */}
                        </Row>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>পত্র</h6>

                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>

                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট দিন</h6>

                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                        </Row>


                    </Card.Body>
                </Card>
                {/* Class test component*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <h6 className='pt-2'>থিওরী (৩ ঘন্টা) অনার্স </h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>পত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => paperInputHandler('theoryPaper', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.theory}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{totalAmounts = amounts.theory * paperNumber.theoryPaper}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>প্রশ্নপত্রকরণ (ক্লাস টেস্ট)</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>পত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => paperInputHandler('classTest', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.classTest}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{paperNumber.classTest * amounts.classTest}</h6>

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                {/* Question moderation component*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <h6 className='pt-2'>প্রশ্নপত্র মডারেশন</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>প্রশ্নপত্র সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => paperInputHandler('moderation', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.questionModeration}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{paperNumber.moderation * amounts.questionModeration}</h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                {/* Exam paper evaluation component*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title>
                            <Card.Title className='text-center pb-2'>খাতা মুল্যায়ন</Card.Title>
                        </Card.Title>
                        <h6 className='pt-2'>সেমিস্টার ফাইনাল (৩ ঘন্টা)</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => textInputHandler('semesterFinalThree', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.examPaperEvalSemesterThree}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{studentNumber.semesterFinalThree * amounts.examPaperEvalSemesterThree}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>সেমিস্টার ফাইনাল (৪ ঘন্টা)</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => textInputHandler('semesterFinalFour', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{studentNumber.semesterFinalFour * amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>ক্লাস টেস্ট</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => textInputHandler('classTest', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.classTest}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{studentNumber.classTest * amounts.classTest}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>মৌখিক পরীক্ষা</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => textInputHandler('viva', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.viva}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{studentNumber.viva * amounts.viva}</h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                {/* Exam paper evaluation component*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title>
                            <Card.Title className='text-center pb-2'>ব্যবহারিক পরীক্ষা</Card.Title>
                        </Card.Title>
                        <h6 className='pt-2'>প্রশ্নপত্র করণ</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>পত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => paperInputHandler('labPaper', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.labQuestion}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{paperNumber.labPaper * amounts.labQuestion}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>রিপোর্ট ও স্ক্রিপ্ট</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => paperInputHandler('reportPaper', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.labReport}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{paperNumber.reportPaper * amounts.labReport}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>সার্ভে</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>দিন সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => paperInputHandler('surveyNumber', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.survey}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{paperNumber.surveyNumber * amounts.survey}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>পরীক্ষকের সম্মানী</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ঘন্টা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => hourInputHandler('examineerLabHour', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.examineerLabHour}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{hour.examineerLabHour * amounts.examineerLabHour}</h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                {/* ট্যাবুলেশন*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title>
                            <Card.Title className='text-center pb-2'>ট্যাবুলেশন</Card.Title>
                        </Card.Title>
                        {/* <h6 className='pt-2'>প্রশ্নপত্র করণ</h6> */}
                        <Row>
                            <Col>
                                <h6 className='pt-2'>বর্ষ</h6>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        {tabulation ? tabulation : 'Select year'}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className='w-100'>
                                        {tabulations.map((name, index) => {
                                            return (
                                                <Dropdown.Item key={index} onClick={() => tabulationHandler(name)}>{name}</Dropdown.Item>
                                            )
                                        })}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.tabulationFirst}</h6>
                            </Col>
                            <Col></Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.tabulationFirst}</h6>
                            </Col>
                        </Row>
                        {/* <h6 className='pt-2'>রিপোর্ট ও স্ক্রিপ্ট</h6> */}
                        <Row className='pt-2'>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input type='number' onChange={(e) => textInputHandler('tabulationStudent', e.target.value)} ></input>
                            </Col>
                            <Col></Col>
                            <Col> 
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{amounts.tabulationFirst}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{studentNumber.tabulationStudent * amounts.tabulationFirst}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>গ্রেডশীট যাচাই</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
                {/*প্রশ্নপত্র তৈরী*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title>
                            <Card.Title className='text-center pb-2'>প্রশ্নপত্র তৈরী (তত্ত্বীয়)</Card.Title>
                        </Card.Title>
                        <h6 className='pt-2'>প্রশ্নপত্র কম্পোজ</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>প্রশ্নের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>প্রশ্নপত্র ফটোকপি</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>তদারকি</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>

                    </Card.Body>
                </Card>
                {/*তত্ত্বীয় পরীক্ষকের সম্মানি*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title>
                            <Card.Title className='text-center pb-2'>তত্ত্বীয় পরীক্ষকের সম্মানি</Card.Title>
                        </Card.Title>
                        <h6 className='pt-2'>প্রধান পরিদর্শক</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ঘন্টা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>পরিদর্শক</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ঘন্টা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>তদারকি</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>পরীক্ষকের সম্মানী</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                {/*থিসিস/রিসার্স/ইন্টার্নশীপ*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title>
                            <Card.Title className='text-center pb-2'>থিসিস / রিসার্স / ইন্টার্নশীপ</Card.Title>
                        </Card.Title>
                        <h6 className='pt-2'>তত্ত্বাবধায়ক</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>পরিক্ষক</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>মৌখিক পরীক্ষা</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                        <h6 className='pt-2'>পরীক্ষকের সম্মানী</h6>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ছাত্রের সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>{examName === 'BSc Engineering' ? amounts.examPaperEvalSenester : amounts.examPaperEvalSemesterFour}</h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                {/*পরীক্ষা কমিটি*/}
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title>
                            <Card.Title className='text-center pb-2'>পরীক্ষা কমিটি</Card.Title>
                        </Card.Title>
                        <Row>
                            <Col>
                                <Form.Check type='switch' id='member' label='সদস্য'>
                                </Form.Check>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>সেমিস্টার সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'> টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'> {amounts.dean}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6> {amounts.dean}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Check type='switch' id='dean' label='সভাপতি'>
                                </Form.Check>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>সেমিস্টার সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'> টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'> {amounts.dean}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6> {amounts.dean}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Check type='switch' id='dean' label='বিভাগীয় চেয়ারম্যান'>
                                </Form.Check>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>সেমিস্টার সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'> টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'> {amounts.dean}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6> {amounts.dean}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Check type='switch' id='dean' label='ডিন'>
                                </Form.Check>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>সেমিস্টার সংখ্যা</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 className='pt-2'> টাকা</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'> {amounts.dean}</h6>
                            </Col>
                            <Col>
                                <h6 className='pt-2'>মোট</h6>
                            </Col>
                            <Col>
                                <h6> {amounts.dean}</h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title className='text-center pb-2'>বিবিধ</Card.Title>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>ডাক মাশুল</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 > মোট</h6>
                            </Col>
                            <Col>
                                <h6 > 250 </h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>বিবিধ</h6>
                            </Col>
                            <Col>
                                <input></input>
                            </Col>
                            <Col>
                                <h6 > মোট</h6>
                            </Col>
                            <Col>
                                <h6 > 250 </h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className='mt-2'>
                    <Card.Body>
                        <Card.Title className='text-center pb-2'>সর্বমোট</Card.Title>
                        <Row>
                            <Col>
                                <h6 className='pt-2'>সর্বমোট</h6>
                            </Col>
                            <Col>
                                <h6 > 250 </h6>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Form>
        </Container>
    )
}

const amounts = {
    theory: 2000,
    classTest: 300,
    questionModeration: 2500,
    examPaperEvalSemesterThree: 120,
    examPaperEvalSemesterFour: 150,
    viva: 60,
    vivaOfficer: 400,
    vivaOfficeAssistant: 350,
    labAttendant: 250,
    labQuestion: 600,
    labReport: 40,
    survey: 12000,
    examineerLabHour: 300,
    tabulationFirst: 70,
    tabulationSecond: 75,
    tabulationThird: 80,
    tabulationFourth: 90,
    gradeSheetEval: 350,
    theoryQuestCompose: 400,
    theoryQuestModeration: 200,
    theoryQuestPhotocopy: 25,
    labHeadExamineer: 600,
    invigilator: 500,
    examController: 2700,
    subExamController: 2200,
    assistantController: 1600,
    officer: 150,
    labAssistant: 100,
    labAttendantLab: 90,
    labCommitteePresident: 2000,
    supervisor: 5000,
    thesisExaminee: 1500,
    thesisViva: 150,
    examCommitteeMember: 2500,
    examCommitteePresident: 4000,
    dean: 6000,
    deptChairman: 5500
}

// teacher = {
//     id,
//     nameEnglish,
//     email,
//     password,
//     nameBengali,
//     rank,
//     departmentName
// }

export default ExamDetails