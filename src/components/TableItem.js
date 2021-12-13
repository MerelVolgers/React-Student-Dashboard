import React from "react"

function TableItem ({name, assignment, difficulty, fun, id}) {

    return(
        <tr key = {id} className="table-row">
            <td> {name || ""} </td>
            <td> {assignment || ""} </td>
            <td> {difficulty || ""}  </td>
            <td> {fun || ""}  </td>
        </tr>
    )
}

export default TableItem