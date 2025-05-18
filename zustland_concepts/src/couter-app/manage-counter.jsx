import useCounter from "../store/useCounter";

function ManageCounter(){
    const stateValue=useCounter(state=>state)
    const {handleIncrementCount, handleDecrementtCount}=stateValue;
    return(
        <div>
            <button onClick={handleIncrementCount} style={{border:"2px solid cornflowerblue",fontWeight:"bold", marginRight:"20px"}}>Handle counter value +1</button>
            <button onClick={handleDecrementtCount} style={{border:"2px solid cornflowerblue",fontWeight:"bold"}}>Handle counter value by -1</button>
        </div>
    )
}
export default ManageCounter;