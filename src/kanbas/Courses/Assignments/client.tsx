import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;

const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENT_API = `${API_BASE}/api/assignments`;

// const COURSES_API =
//   "https://kanbas-node-server-app-bh73.onrender.com/api/courses";
// const ASSIGNMENT_API =
//   "https://kanbas-node-server-app-bh73.onrender.com/api/assignments";

interface Assignment {
  _id: string;
  title: string;
  description: string;
}

export const createAssignment = async (
  courseId: string | undefined,
  Assignment: Assignment
) => {
  const response = await axios.post(
    `${COURSES_API}/${courseId}/Assignments`,
    Assignment
  );
  return response.data;
};

export const updateAssignment = async (Assignment: Assignment) => {
  const response = await axios.put(
    `${ASSIGNMENT_API}/${Assignment._id}`,
    Assignment
  );
  return response.data;
};

export const deleteAssignment = async (AssignmentId: string | null) => {
  const response = await axios.delete(`${ASSIGNMENT_API}/${AssignmentId}`);
  return response.data;
};

export const findAssignmentsForCourse = async (
  courseId: string | undefined
) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/Assignments`);
  return response.data;
};