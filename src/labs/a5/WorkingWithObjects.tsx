import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const [module, setModule] = useState({
    id: 2,
    name: "Webdev is actually not that bad",
    author: "bro",
  });

  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const MODULE_URL = "http://localhost:4000/a5/module";

  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <h3>Modifying Properties</h3>
      <div className="container">
  <div className="row">
    <div className="col">
      <div className="row">
        <input
          className="form-control mb-2"
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          value={assignment.title}
          type="text"
        />
      </div>
      <div className="row">
        <button className="btn btn-primary mb-2" onClick={updateTitle}>
          Update Title to: {assignment.title}
        </button>
      </div>
      <div className="row">
        <button className="btn btn-primary mb-2" onClick={fetchAssignment}>
          Fetch Assignment
        </button>
      </div>
      <div className="row">
        <button
          className="btn btn-danger m-2"
          onClick={() =>
            (window.location.href = "http://localhost:4000/a5/assignment")
          }
        >
          Get Assignment
        </button>
      </div>
    </div>
  </div>
</div>
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-danger m-2"
        href="http://localhost:4000/a5/assignment/title"
      >
        Get Title
      </a>

      <h4>Modifying Properties</h4>
      <div className="mb-3">
        <a
          className="btn btn-primary m-2"
          href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
        <input
          type="text"
          className="form-control d-inline-block"
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
          value={assignment.title}
        />
      </div>

      <h3>3.2.4 On your own</h3>
      <a className="btn btn-primary m-2" href="http://localhost:4000/a5/module">
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-danger m-2"
        href="http://localhost:4000/a5/module/name"
      >
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <div className="mb-3">
        <a
          className="btn btn-primary m-2"
          href={`${MODULE_URL}/name/${module.name}`}
        >
          Update Name
        </a>
        <input
          type="text"
          className="form-control d-inline-block"
          onChange={(e) => setModule({ ...module, name: e.target.value })}
          value={module.name}
        />
      </div>
    </div>
  );
}
export default WorkingWithObjects;