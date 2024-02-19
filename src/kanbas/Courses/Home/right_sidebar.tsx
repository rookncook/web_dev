import { FaFileImport, FaCodeBranch, FaHome, FaStream, FaBell, FaBullhorn, FaChartLine } from 'react-icons/fa';
import "./home.css"
interface ButtonWithIconProps {
  icon: React.ElementType;
  text: string;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({ icon: Icon, text }) => {
  return (
    <div className="bg-light border">
      <button className="btn btnnew">
        <Icon className="m-10" />
        <span className="icon-text">{text}</span>
      </button>
    </div>
  );
};

const RightSideBar: React.FC = () => {
  return (
    <div className="container">
      <div className="buttons-container">
        <button className="btn btnnew mr-2">Unpublish</button>
        <button className="btn btnnew">Published</button>
      </div>
      <div className="sidebar">
        <h3>Course Status</h3>

        <div className="vstack">
          <ButtonWithIcon icon={FaFileImport} text=" Import Existing Content" />
          <ButtonWithIcon icon={FaCodeBranch} text=" Import From Commons" />
          <ButtonWithIcon icon={FaHome} text=" Choose Home Page" />
          <ButtonWithIcon icon={FaStream} text=" View Course Stream" />
          <ButtonWithIcon icon={FaBullhorn} text=" New Announcement" />
          <ButtonWithIcon icon={FaChartLine} text=" New Analytics" />
          <ButtonWithIcon icon={FaBell} text=" View Course Notifications" />
        </div>
        <h3 style={{paddingTop:"20px"}}>To Do</h3>
<ul className="list-unstyled todo-list">
  <li>
    <a href="#">
      <span className="bold-red">GradeA1 -ENV+HTML</span><br />
      <span className="light-gray">100 points . Sept 18 at 11:59PM</span>
    </a>
  </li>
  <li>
    <a href="#">
      <span className="bold-red">GradeA1 -ENV+HTML</span><br />
      <span className="light-gray">100 points . Sept 18 at 11:59PM</span>
    </a>
  </li>
  <li>
    <a href="#">
      <span className="bold-red">GradeA1 -ENV+HTML</span><br/>
      <span className="light-gray">100 points . Sept 18 at 11:59PM</span>
    </a>
  </li>
</ul>
      </div>
    </div>
  );
};

export default RightSideBar;
