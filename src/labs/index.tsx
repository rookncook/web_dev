import Assignment3 from "./a3";
import JavaScript from "./a3/JavaScript";
import { Link } from "react-router-dom";
import Nav1 from "../nav";
import Classes from "./a3/routing/classes";
import Styles from "./a3/styles";
const Labs = () => {
    return ( 
        <div>
        <Nav1></Nav1>
        <Styles></Styles>
        <Assignment3/>
        <JavaScript/>
        <Classes></Classes>
      </div>
     );
}
 
export default Labs;