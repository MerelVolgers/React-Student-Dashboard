import rawStudentData from "./studentdata.csv"
import Papa from 'papaparse'
import React, { useEffect, useState } from "react"

function Data () {
    const [data, setData] = useState([])

    const getData = () => {
        Papa.parse(rawStudentData)
    }
    useEffect( () => {
        getData()
    }, [] )

    return(
        <div>
            <h1> Data </h1>
        </div>
    )
}

export default Data