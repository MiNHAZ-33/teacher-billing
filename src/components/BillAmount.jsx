import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const BillAmount = () => {

    const amounts = useSelector(state => state.billlist)

    return (
        <Container>
            <h3 className='mt-2 text-center'>বিলের পারিতোষিক হার</h3>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <td> নাম </td>
                    <td> পারিতোষিক হার </td>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(amounts).map(([key, value], index) => (
                        <tr key={index}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            
        </Container>
    )
}

export default BillAmount