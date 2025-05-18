import useCounter from "../store/useCounter";

function CounterValue(){
    const stateValue =useCounter(state=>state);
    const {count}=stateValue;
    return(
        <div style={{marginTop:'20px', fontSize:"30px"}}>
            Counter value is <span style={{color:"cornflowerblue",fontWeight:"bold"}}>{count}</span>
        </div>
    )
}
export default CounterValue;