import axios from "axios";
const API_URL = process.env.REACT_APP_API_BASE;
// const COURSES_API = `${API_URL}/api/courses`;
// const ASSIGNMENT_API = `${API_URL}/api/assignments`;

const COURSES_API = "http://localhost:4000/api/courses";
const ASSIGNMENT_API = "http://localhost:4000/api/courses/assigments";

interface Assignment {
    _id: string; 
    title: string;
    description: string;
}
export const updateAssignment = async (Assignment: Assignment) => {
    const response = await axios.
      put(`${ASSIGNMENT_API}/${Assignment._id}`, Assignment);
    return response.data;
  };

  
export const deleteAssignment = async (AssignmentId: string | null) => {
    const response = await axios
      .delete(`${ASSIGNMENT_API}/${AssignmentId}`);
    return response.data;
  };

  
export const createAssignment = async (courseId: string | undefined, Assignment: Assignment) => {
    const response = await axios.post(
      `${COURSES_API}/${courseId}/Assignments`,
      Assignment
    );
    return response.data;
  };
  
export const findAssignmentsForCourse = async (courseId: string | undefined) => {
  const response = await axios
    .get(`${COURSES_API}/${courseId}/Assignments`);
  return response.data;
};