import React from "react"; // Add React import
import { assignments, enrollments, grades, users } from "../../Database"; // Correct import statement
import { useParams } from "react-router-dom";

function Grades() {
  const { courseId } = useParams();
  const as = assignments.filter((assignment) => assignment.course === courseId);
  const es = enrollments.filter((enrollment) => enrollment.course === courseId);

  return (
    <div>
      <h1>Grades</h1>
      <div className="row">
              <div className="col">
                <div className="container mt-4">
                  <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr> {/* Corrected to include tr tag */}
              <th>Student Name</th>
              {as.map((assignment) => (
                <th key={assignment._id}>{assignment.title}</th> // Added key prop
              ))}
            </tr> {/* Added closing tr tag */}
          </thead>
          <tbody>
            {es.map((enrollment) => {
              const user = users.find((user) => user._id === enrollment.user);
              return (
                <tr key={enrollment._id}> {/* Added key prop */}
                  <td>{user?.firstName} {user?.lastName}</td>
                  {as.map((assignment) => {
                    const grade = grades.find(
                      (grade) => grade.student === enrollment.user && grade.assignment === assignment._id
                    );
                    return <td key={assignment._id}>{grade?.grade || ""}</td>; // Added key prop
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Grades;
