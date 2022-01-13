import React, {Component} from "react"
import Table from "../components/Table"
// import Data from "../data/data"
import Chart from "../components/Chart"
import Checkboxes from "../components/Checkboxes"
import Student from "../containers/Student"

class Home extends Component {
    constructor () {
        super()
        this.state = {
            // items: [{Data}]
            items: [
                {name:"piet", assignment: "a45", difficulty:"1", fun: "5"},
                {name:"klaas", assignment: "8hb", difficulty:"5", fun: "4"},
                {name:"petra", assignment: "2b", difficulty:"4", fun: "2"},
                {name:"ashley", assignment: "2b", difficulty:"4", fun: "4"},
                {name:"ashley", assignment: "ji23", difficulty:"3", fun: "5"},
                {name:"marion", assignment: "xh3", difficulty:"3", fun: "3"}
            ]
        }
        this.sortByAZ = this.sortByAZ.bind(this)
        this.sortByZA = this.sortByZA.bind(this)
    }
////////////////////////////// sorting the table items//////////
    sortByAZ = (key) => {
        const sortedItems = [...this.state.items]
        sortedItems.sort( (a,b) => (a[key].toLowerCase() < b[key].toLowerCase() ) ? -1 : 1)
        this.setState( {items:sortedItems})
    }

    sortByZA = (key) => {
        const sortedItems = [...this.state.items]
        sortedItems.sort( (a,b) => (a[key].toLowerCase() < b[key].toLowerCase() ) ? 1 : -1)
        this.setState( {items:sortedItems})
    }
//////////////////////////////////////////////////////////////
    render() {
        return(
            <div className="main">
                <h1> This is the homepage </h1>
                <p> I will consist of: </p>
                <p> 1. bar chart with data of all students showing fun versus difficultulty rating of the assignments </p>
                <p> this bar chart has checkboxes to filter on students</p>
            <Checkboxes 
                // checkedDifficult = {items.checkedDifficult}
                // checkedFun = {items.checkedFun}
            />

            <Chart 
                items = {this.state.items}
                // checkedDifficult = {items.checkedDifficult}
                // checkedFun = {items.checkedFun}
            />

                <p> 2. list of names of the students with their relative path. if you click this you will be redirected to their own student page with their own charts and data </p>
            <Student 
                items = {this.state.items}
            />

                <p> 3. line chart of the data average grades of all students. which shows a line for average difficulty and average fun (including checkboxes to filter data)</p>
            
                <p> 4. table overview of all the data which can be filtered per column </p>
            <Table 
                items = {this.state.items}
                sortByAZ = {this.sortByAZ}
                sortByZA = {this.sortByZA}
            /> 
                
            </div>
        )
    }
}

export default Home