import mulitply_divide from "./mulitply_divide.js";
import add_subtract from "./add_subtract.js";
import working_with_objects from "./working with objects.js";
import working_with_arrays from "./working_with_arrays.js";

const todos = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: true },
  { id: 3, title: "Task 3", completed: false },
  { id: 4, title: "Task 4", completed: true },
];



const Lab5 = (app) => {
  
  mulitply_divide(app)
  add_subtract(app)
  working_with_objects(app)
  working_with_arrays(app)

  
  };
  export default Lab5;