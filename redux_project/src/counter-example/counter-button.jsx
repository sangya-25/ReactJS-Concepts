import { useDispatch } from "react-redux";
import { handleIncreaseCountAction } from "../store/slices/counter";

function CounterButton(){
    const dispatch=useDispatch()
    function handleClick(){
        dispatch(handleIncreaseCountAction({
            id: 1,
            name:"Sangya"
        }))
    }
    return(
        <button onClick={handleClick}>Increase count</button>
    )
}
export default CounterButton;