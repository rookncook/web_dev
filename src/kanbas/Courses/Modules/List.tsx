import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [moduleList, setModuleList] = useState<any[]>(modules);
  const [module, setModule] = useState({
    name: "New Module",
    description: "New Description",
    course: courseId,
  });

  const addModule = (module: any) => {
    console.log(module)
    const newModule = { ...module,
      _id: new Date().getTime().toString() };
    const newModuleList = [newModule, ...moduleList];
    console.log(newModuleList)
    setModuleList(newModuleList);
  };



  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <>
      <div>
        <div className="row justify-content-between m-3">
          <div className="col">
            <button type="button" className="btn btnnew btn-block">Collapse All</button>
          </div>
          <div className="col">
            <button type="button" className="btn btnnew btn-block">View Progress</button>
          </div>
          <div className="col">
            <button type="button" className="btn btnnew btn-block">View Progress</button>
          </div>
          <div className="col">
            <button type="button" className="btn btn-danger btn-block">Module</button>
          </div>
        
    </div>
      
    <ul className="list-group wd-modules">
    <li className="list-group-item">
        <button onClick={() => { addModule(module) }}>Add</button>
        
        <input value={module.name}
          onChange={(e) => setModule({
            ...module, name: e.target.value })}
        />
        <textarea value={module.description}
          onChange={(e) => setModule({
            ...module, description: e.target.value })}
        />
      </li>

  {modulesList.filter((module) => module.course === courseId)
.map((module,index) => (
    <li key={index} className="list-group-item module-item" onClick={() => setSelectedModule(module)}>
      <div className="module-header">
        <FaEllipsisV className="me-2" />
        <span className="module-name">{module.name}</span>
        <span className="module-icons float-end">
          <FaCheckCircle className="text-success" />
          <FaPlusCircle className="ms-2" />
          <FaEllipsisV className="ms-2" />
        </span>
      </div>
      {selectedModule._id === module._id && (
        <ul className="list-group lesson-list">
          {module.lessons?.map((lesson) => (
            <li className="list-group-item lesson-item">
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