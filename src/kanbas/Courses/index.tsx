import { courses } from "../../kanbas/Database";
import {Navigate, Route, Routes, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdArrowDropright } from "react-icons/io";

import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./Navigation/index.css";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";





function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments"];
  const { pathname } = useLocation();
  const lastWord = pathname.split('/').pop();
  return (
    <div>
      <div className="top-left-div">
      <h1 className="top-bar-course">
      <HiMiniBars3 /> 
      <span className="course_name">Course {course?.name}</span>
      <IoMdArrowDropright />
       <span className="last-word">{lastWord}</span>
       <hr />
        </h1>
      <CourseNavigation />
      </div>
      

      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "300px", top: "50px", paddingRight:"40px"}} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>

  );
}
export default Courses;