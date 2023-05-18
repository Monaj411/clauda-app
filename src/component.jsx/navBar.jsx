import React, { useState } from "react";
//import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
//import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleNavToggle = () => {
    setShowNav((prev) => !prev);
  };
  return (
    <p>this is the navbar</p>
    //<nav>
      //<div className="nav-center d-flex -0 fontBody navText">
        //<Link className="home text-white" to="/">
          //Home
        //</Link>

        //<div className="hamburger">
          //<FaBars className="toggle-icon " onClick={handleNavToggle} />
        //</div>
        //{/* {showNav && ( */}
       // <ul className={showNav ? "nav-links show-nav" : "nav-links "}>
         // {/* d-none d-md-block */}
          //<li>
           // <Link
             // onClick={handleNavToggle}
             // className="text-white navText"
              //to="/product"
            //>
           //   Product
            //</Link>
          //</li>
         // <li>
         //   <Link
           //   onClick={handleNavToggle}
              //className="text-white navText"
              //to="/about"
            //>
            //  About
           // </Link>
          //</li>
          //<li>
            //<Link
              //onClick={handleNavToggle}
              //className="text-white navText"
  //            to="/contact"
            //>
              //Contact
            //</Link>
          //</li>
          //<li>
            //<Link
        //      onClick={handleNavToggle}
      //        className="text-white navText"
    //          to="/login"
            //>
           //   Login
        //    </Link>
          //</li>
         // <li>
            //<Link
              //onClick={handleNavToggle}
          //    className="text-white navText"
            //  to="/sign"
          //  >
              //Sign up
            //</Link>
         // </li>
        //</ul>
       // {/* )} */}
      //</div>
    //</nav>
  );
};

export default NavBar;
