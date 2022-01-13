import { VictoryBar, VictoryChart, VictoryAxis, VictoryLine, VictoryLabel, VictoryGroup, VictoryTooltip, VictoryZoomContainer } from "victory"

const Chart = ({items}) => {
    
    const dataDifficulty = items.map ((item) => ({
        assignment: item.assignment,
        difficulty: item.difficulty,
    }))
    const dataFun = items.map ((item) => ({
        assignment: item.assignment,
        fun: item.fun
    }))

    const barDifficulty = items.checkedDifficult ? {data: {fill: "tomato"}} : {fillOpacity: 0}
    const barFun = items.checkedFun ? {data: {fill: "gold"}} : {fillOpacity: 0}

    return(
        <div className="chart">
            <VictoryChart domainPadding={20} >
                <VictoryGroup offset={20} 
                // colorScale={["gold", "tomato"]}
                >
                    <VictoryBar
                        data = {dataDifficulty}
                        x="assignment"
                        y= "difficulty"
                        style = {barDifficulty}
                    />
                
                    <VictoryBar
                        data = {dataFun}
                        x= "assignment"
                        y= "fun"
                        style = {barFun}
                    />
                </VictoryGroup>

                <VictoryAxis 
                    label="Assignment" 
                    tickValues={[1,2,3,4,5]} 
                    tickFormat={items.assignment}
                />
                <VictoryAxis dependentAxis 
                    label="Rating" 
                    tickFormat={[1,2,3,4,5]}
                    tickValues={[1,2,3,4,5]}
                />
            </VictoryChart>
        </div>
    )
}

export default Chart