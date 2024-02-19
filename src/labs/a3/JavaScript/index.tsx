import Ifelse from "./conditionals/IfElse";
import TernaryOperator from "./conditionals/TernaryOperator";
import BoolVariables from "./variables/BooleanVariables";
import VariablesAndConstants from "./variables/VariablesAndConstants";

const JavaScript = () => {
    return ( 
        <div>
            <h1>JavaScript</h1>
        <VariablesAndConstants/>
        <BoolVariables/>
        <Ifelse/>
        <TernaryOperator/>
        </div>
        
     );
}
 
export default JavaScript;