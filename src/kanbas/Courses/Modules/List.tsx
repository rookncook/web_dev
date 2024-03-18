import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";


function ModuleList() {
  
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [moduleList, setModuleList] = useState<any[]>(modules);
  const [module, setModule] = useState({
    _id:"0",
    name: "New Module",
    description: "New Description",
    course: courseId || "",
  });

  const addModule = () => {
    const newModule = {
      ...module,
      _id: new Date().getTime().toString(),
    };
    const newModuleList = [...moduleList, newModule];
    setModuleList(newModuleList);
  };

  const deleteModule = (moduleId: string) => {
    const newModuleList = moduleList.filter(
      (module) => module._id !== moduleId
    );
    setModuleList(newModuleList);
  };
  
  const updateModule = () => {
    const newModuleList = moduleList.map((m) => {
      if (m._id === module._id) {
        return module;
      } else {
        return m;
      }
    });
    setModuleList(newModuleList);
  };


  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  return (
    <>
      <div>
        <div className="row justify-content-between m-3">
          <div className="col">
            <button type="button" className="btn btnnew btn-block">
              Collapse All
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btnnew btn-block">
              View Progress
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btnnew btn-block">
              View Progress
            </button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-danger btn-block">
              Module
            </button>
          </div>
        </div>

        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div className="row align-items-center">
              <div className="col-auto">
                <button className="btn btn-primary" onClick={addModule}>Add</button>
                <button className="btn btn-success ms-2" onClick={updateModule}>
                Update
        </button>

              </div>
              <div className="col">
                <input
                  className="form-control mb-2"
                  value={module.name}
                  onChange={(e) => setModule({ ...module, name: e.target.value })}
                />
                <input
                  className="form-control"
                  value={module.description}
                  onChange={(e) => setModule({ ...module, description: e.target.value })}
                />
              </div>
            </div>
          </li>

          {moduleList
            .filter((module) => module.course === courseId)
            .map((module, index) => (
              <li key={index} className="list-group-item module-item" onClick={() => setSelectedModule(module)}>
                <div className="module-header">
                  <FaEllipsisV className="me-2" />
                  <span className="module-name">{module.name}</span>
                  <span className="module-icons float-end">
                  <button
                  className="btn btn-primary btn-sm me-2"
              onClick={(event) => { setModule(module); }}>
              Edit
            </button>

                    <button className="btn btn-danger btn-sm me-2" onClick={() => deleteModule(module._id)}>Delete</button>
                    <FaCheckCircle className="text-success" />
                    <FaPlusCircle className="ms-2" />
                    <FaEllipsisV className="ms-2" />
                  </span>
                </div>
                {selectedModule._id === module._id && (
                  <ul className="list-group lesson-list">
                    {module.lessons?.map((lesson: { name: string }, lessonIndex: number) => (
                      <li key={lessonIndex} className="list-group-item lesson-item">
                        <FaEllipsisV className="me-2" />
                        <span className="lesson-name">{lesson.name}</span>
                        <span className="lesson-icons float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default ModuleList;
