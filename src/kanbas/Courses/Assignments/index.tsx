import {
  FaCheckCircle,
  FaEllipsisV,
  FaPlusCircle,
  FaBook,
  FaEllipsisH
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import "./index.css";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div className="col-md mt-4 justify-content-start">
  
    <div className="buttons-container">
      <div className="row">
        <div className="col-md-6">
            <input type="text" id="myTextbox" className="form-control" placeholder="Search for Assignments" />
        </div>
        <div className="col-md-auto text-right">
            <button className="btn btn-light ">Group</button>
            <button className="btn btn-danger">Assignment</button>
            <button className="btn btn-light dropdown-toggle" data-toggle="dropdown">
                <i className="fas fa-ellipsis-v"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-right">
                <a className="dropdown-item" href="#">Edit Assignment Dates</a>
            </div>
        </div>
    </div>
    <div className="container mt-3">
      <div className="row">
        <div className="col-12">
          <div className="list-group wd-modules">
            <div className="list-group-item bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h2>Assignments</h2>
                <span className="badge badgecolor">40% of Total</span>
              </div>
              <ul className="list-group">
                {assignmentList.map((assignment) => (
                  <li key={assignment._id} className="list-group-item d-flex">
                    <div className="col-1 d-flex align-items-center justify-content-center">
                    <FaEllipsisH className="ms-2"/> <FaBook className="ms-2 custom-green-book" />
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                      <i className="fa fa-book ms-2"></i>
                    </div>
                    <div className="col">
                      <span className="ml-2">
                        <Link
                          to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        >
                          {assignment.title}
                        </Link>
                        <br />
                        <span className="mulitplemodule text-red">Muliple Module</span> | <b>Due Sept 18 at 11:59PM</b> | 100 pts
                      </span>
                    </div>
                    <div className="col-1 d-flex align-items-center justify-content-center">
                      <FaCheckCircle className="text-success me-2" />
                      <FaEllipsisV className="ms-2" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Assignments;
