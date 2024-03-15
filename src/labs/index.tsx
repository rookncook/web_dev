import JavaScript from "./a3/JavaScript";
import { Link } from "react-router-dom";
import Nav1 from "../nav";
import Classes from "./a3/routing/classes";
import Styles from "./a3/styles";
import Nav from "../nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Routes, Route, Navigate}
  from "react-router";

function Labs() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/"
         element={<Navigate
                   to="a3"/>}/>
        <Route path="a3"
         element={<Assignment3/>}/>
        <Route path="a4"
         element={<Assignment4/>}/>
      </Routes>
    </div>
  );
 }
export default Labs;