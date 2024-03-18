import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import {
  FaTachometerAlt,
  FaRegUserCircle,
  FaBook,
  FaRegCalendarAlt,
  FaInbox,
  FaHistory,
  FaUsers,
  FaQuestionCircle,
} from "react-icons/fa";
import { Console } from "console";

const KanbasNavigation = () => {
  const links = [
    { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
    { label: "Courses", icon: <FaBook className="fs-2" /> },
    { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox", icon: <FaInbox className="fs-2" /> },
    { label: "History", icon: <FaHistory className="fs-2" /> },
    { label: "Studio", icon: <FaUsers className="fs-2" /> },
    { label: "Commons", icon: <FaUsers className="fs-2" /> },
    { label: "Help", icon: <FaQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  console.log(pathname);
  

  console.log(pathname);
  console.log(pathname);


  return (
    <ul className="wd-kanbas-navigation">
      <img
        src="/img/northeastern.png"
        className="logo_image"
        alt="Northeastern Logo"
      />
      {links.map((link, index) => (
        <li
          key={index}
          className={pathname.includes(link.label) ? "wd-active" : ""}
        >
          <Link to={`/Kanbas/${link.label}`} className="white-label">
            {link.icon} <span>{link.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default KanbasNavigation;
