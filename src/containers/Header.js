import React from "react"
import { Link } from "react-router-dom"

function Header () {
    return(
        <div className="header">
            <h1> React Student Dashboard </h1>
            <nav className="navigation">
                <Link to="/" className="nav-link"> Home </Link>
                <Link to="/about" className="nav-link"> About </Link>
                {/* <Link to="/student" className="nav-link"> Student </?Link> */}
            
            </nav>
        </div>
    )
}

export default Header