import React from 'react'
import Logout from '../Logout'
import { Link } from 'react-router-dom'
import AdminBar from '../../components/AdminBar'
const Subject = () => {
  return (
    <div>
        <AdminBar>
     
      <nav className="">
        <button className="" >
          <span className=""></span>
        </button>
        <div className="" >
Student List
          <ul className="">
          </ul>
          <Link to="/add-student">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Subject</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Subject 1</th>
              <th scope="col">Subject 2</th>
              <th scope="col">Subject 3</th>
              <th scope="col">Subject 4</th>
              <th scope="col">Subject 5</th>
              <th scope="col">Subject 6</th>
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

export default Subject
