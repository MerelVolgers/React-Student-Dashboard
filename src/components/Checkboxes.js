
const Checkboxes = ({items}) => {

    return(
        <div className="checkboxes-container">
            <p> Select what you want to filter here: </p>

            <label>
                <input 
                    type="checkbox" 
                    // checked={items.checkedDifficult} 
                /> Difficulty
            </label>

            <label>
                <input 
                    type="checkbox" 
                    // checked={items.checkedFun}
                    // onChange={(e) => items.setStateFun(e.target.checked)}
                /> Fun
            </label>
            
        </div>
    )

}
export default Checkboxes