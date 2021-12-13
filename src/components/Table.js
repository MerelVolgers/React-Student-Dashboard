import React from "react"
import TableItem from "../components/TableItem"

function Table ({items}) {

    const ListItems = items ? items.map (item => (
        <TableItem
            key = {item.id}
            id = {item.id}
            name = {item.name}
            assignment = {item.assignment}
            difficulty = {item.difficulty}
            fun = {item.fun}
        />
    )) : ""

    return(
        <div className="table">
            <table className= "table">
                <thead className="table-head"> 
                    <th className="table-head-row" > Name Student </th>                    
                    <th className="table-head-row"> Assignment </th>
                    <th className="table-head-row"> Difficulty?  </th>
                    <th className="table-head-row"> Fun? </th> 
                    <th></th>
                </thead>
                
                <tbody className="table-body">
                    {ListItems}
                </tbody>
            </table>        
        </div>
    )
}

export default Table