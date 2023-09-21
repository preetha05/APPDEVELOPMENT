import React from 'react'
import AdminBar from '../../components/AdminBar'
import Logout from '../Logout'
import { Link } from 'react-router-dom'
const Result = () => {
  return (
    <div>
      <AdminBar>
      
       <nav className="">
       
        <div >
Student List
          <ul >
          </ul>
          <Link to="/add-student">
            <button className="" type="submit">Add Result</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Subject 1 Mark</th>
              <th scope="col">Subject 2 Mark</th>
              <th scope="col">Subject 3 Mark</th>
              <th scope="col">Subject 4 Mark</th>
              <th scope="col">Subject 5 Mark</th>
              <th scope="col">Result Status</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            </tbody>
            </table>
            </div>
            
      </AdminBar>
    </div>
  )
}

export default Result
