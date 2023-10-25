import React, { useContext } from 'react'
import { MyContext } from '../Context'
import { Table } from 'react-bootstrap'

function Adminviewuser() {
    const {signup} = useContext(MyContext)

  return (
    <div>  <div> <h2>View Users</h2>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {signup.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table></div></div>
  )
}

export default Adminviewuser