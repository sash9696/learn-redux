import React from "react";
import { Link } from "react-router-dom";
import "./NavItem.css";

function NavItem({ title, link }) {
  //   const navigate = useNavigate();

  //   const redirect = () => {
  //     navigate(link);
  //   };

  return (
    // <div onClick={redirect} className="navItem">
    //   <p className="navItem-title">{title} </p>
    // </div>
    <div className="navItem">
      <Link to={`${link}`}>
        <p className="navItem-title">{title} </p>
      </Link>
    </div>
  );
}

export default NavItem;
