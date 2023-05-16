import { Link, Outlet } from "react-router-dom";

import "./GeneralLayout.css";

const GeneralLayout = () => {
  return (
    <div className="general-layout">
      <div className="sidebar">
        <Link to={"/"}>
          <h3>Learning Discipliner</h3>
        </Link>
        <ul>
          {/* <Link to={"/home"}>
            <li>Home</li>
          </Link> */}
          <Link to={"/goals"}>
            <li>Your Goals</li>
          </Link>
          <Link to={"/weaknesses"}>
            <li>Your Weaknesses</li>
          </Link>
          <Link to={"/tasks"}>
            <li>Your Tasks</li>
          </Link>
          <Link to={"/summary"}>
            <li>Summary</li>
          </Link>
        </ul>
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default GeneralLayout;
