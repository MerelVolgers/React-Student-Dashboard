import React from "react"
import Chart from "../components/Chart"
import Table from "../components/Table"
import Checkboxes from "../components/Checkboxes"
import StudentProfile from "../components/StudentProfile"

function Student ({items}) {

    const ListStudents = items? items.map (item => (
        <StudentProfile 
            key= {item.id}
            id = {item.id}
            name = {item.name}
            assignment = {item.assignment}
            difficulty = {item.difficulty}
            fun = {item.fun}
        />
    )) : ""

    return(
        <div className="student">
            <h1> Please click on a students name to go to their profile </h1>
            <a href=""> {ListStudents} </a>
        </div>
    )
}

export default Student