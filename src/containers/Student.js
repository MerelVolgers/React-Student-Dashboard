import React from "react"
import Table from "../components/Table"

function Student () {
    return(
        <div className="main">
            <h1> this is the Single student page </h1>
            <p> 1. student details/ profile </p>
            <p> 2. bar chart of student </p>
            <p> 3. line chart of student </p>
            <p> 4. table of student </p>
            {/* <p> <Table /> </p> */}
        </div>
    )
}

export default Student