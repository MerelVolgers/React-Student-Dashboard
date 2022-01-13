import React from "react"
import TableItem from "../components/TableItem"

function Table ({items, sortByAZ, sortByZA}) {

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
                    <th className="table-head-row" > Name Student 
                    <button onClick= { () => {sortByAZ("name")} }> v </button>
                    <button onClick= { () => {sortByZA("name")} }> ^ </button></th>               
                    
                    <th className="table-head-row"> Assignment 
                    <button onClick= { () => {sortByAZ("assignment")} }> v </button>
                    <button onClick= { () => {sortByZA("assignment")} }> ^ </button></th>

                    <th className="table-head-row"> Difficulty?  
                    <button onClick= { () => {sortByAZ("difficulty")} }> v </button>
                    <button onClick= { () => {sortByZA("difficulty")} }> ^ </button></th>

                    <th className="table-head-row"> Fun? 
                    <button onClick= { () => {sortByAZ("fun")} }> v </button>
                    <button onClick= { () => {sortByZA("fun")} }> ^ </button></th>

                </thead>
                
                <tbody className="table-body">
                    {ListItems}
                </tbody>
            </table>        
        </div>
    )
}

export default Table