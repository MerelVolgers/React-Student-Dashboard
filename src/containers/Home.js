import React, {Component} from "react"
import Table from "../components/Table"

class Home extends Component {
    constructor () {
        super()
        this.state = {
            items: [{name: "merel", assignment: "2B", difficulty: 4, fun: 3}]
        }
    }

    render() {
        return(
            <div className="main">
                <h1> this is the homepage </h1>
                <p> i will consist of: </p>
                <p> 1. bar chart with data of all students showing fun versus difficultulty rating of the assignments </p>
                <p> this bar chart has checkboxes to filter on students</p>
                <p> 2. list of names of the students with their relative path. if you click this you will be redirected to their own student page with their own charts and data </p>
                <p> 3. line chart of the data average grades of all students. which shows a line for average difficulty and average fun (including checkboxes to filter data)</p>
                <p> 4. table overview of all the data which can be filtered per column </p>
                
                <Table 
                    items = {this.state.items}
                /> 
                
            </div>
        )
    }
}

export default Home