import React from "react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer () {
    return(
        <div className="footer">
            <h4> Merel Volgers, 2021 </h4>
            
            <a className="icons" href="https://www.linkedin.com/in/merelvolgers/" target="_blank"> <FaLinkedin /> </a>
            <a className="icons" href="https://github.com/MerelVolgers" target="_blank"> <FaGithub /></a>
            
        </div>
    )
}

export default Footer