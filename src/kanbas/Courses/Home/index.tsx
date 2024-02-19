import React from "react";
import ModuleList from "../Modules/List";
import RightSideBar from "./right_sidebar";
import "./home.css"; // Import the CSS file

function Home() {
  return (
    <div className="home-container">
      <div className="main-content"> {/* ModuleList is the main content */}
        <ModuleList />
      </div>
      <div className="side-content"> {/* RightSideBar occupies the side space */}
        <RightSideBar />
      </div>
    </div>
  );
}

export default Home;
