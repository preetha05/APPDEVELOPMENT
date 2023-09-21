
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Logout from "./Logout";
import '../assets/Css/form.css';
import AdminBar from "../components/AdminBar";
const Student = () => {
    return(
        <div>
       <AdminBar>
        <div className="Wrapper">
           
           
           <nav className="">
        <button className="" >
          <span className=""></span>
        </button>
        <div className="" >
         Student List
          <ul className="">
          </ul>
          <Link to="/add-student">
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add new student</button>
          </Link>
        </div>
      </nav>
      <div className="container">
        <table className="table">
          <thead className="thead-dark">
            
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Class</th>
              <th scope="col">Birthdate</th>
              <th scope="col">Address</th>
              <th scope="col">Email Id</th>
              <th scope="col">Contact No.</th>
              <th scope="col">Edit</th>
            </tr>
          </thead>
          <tbody>
            </tbody>
            </table>
            </div>
            </div>
            </AdminBar>
        </div>
    )
}
export default Student;