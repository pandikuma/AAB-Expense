import React, { useState } from "react";
import './Heading.css'
import { Link, useLocation } from "react-router-dom";

const Heading = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    const handleLinkClick = (path) => {
        setActiveLink(path);
    };

  return (
    <div>
        <div className="topbar-title">
                <h3>
                    <Link
                        className={`link ${activeLink === '/' ? 'active' : ''}`}
                        to='/'
                        onClick={() => handleLinkClick('/')}
                    >
                        Form
                    </Link>
                </h3>
                <h3>
                    <Link
                        className={`link ${activeLink === '/History' ? 'active' : ''}`}
                        to='/History'
                        onClick={() => handleLinkClick('/History')}
                    >
                        Tableview
                    </Link>
                </h3>
                <h3>
                    <Link
                        className={`link ${activeLink === '/InputData' ? 'active' : ''}`}
                        to='/InputData'
                        onClick={() => handleLinkClick('/InputData')}
                    >
                        Database
                    </Link>
                </h3>
            </div>
    </div>
  )
}

export default Heading