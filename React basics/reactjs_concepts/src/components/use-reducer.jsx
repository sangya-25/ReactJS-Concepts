import { useReducer } from "react";

const initialState={
    showTextFlag : false,
    changeTextStylesFlag : false,
};
const HIDE_TEXT='HIDE_TEXT';
const SHOW_TEXT="SHOW_TEXT";
const CHANGE_TEXT_STYLE="CHANGE_TEXT_STYLE"
function reducer(state,action){
    switch (action.type){
        case 'HIDE_TEXT':
            return{
                ...state,
                showTextFlag:false
            }
        case 'SHOW_TEXT':
            return{
                ...state,
                showTextFlag:true
            }
        case 'CHANGE_TEXT_STYLE':
            return{
                ...state,
                changeTextStylesFlag : !state.changeTextStylesFlag
            }
        default:
            return state;
    }
}
export function UseReducerEx(){
    const [state,dispatch]=useReducer(reducer,initialState)
    return <div>
        {
            state?.showTextFlag ? <h1 style={{color: state?.changeTextStylesFlag?"cornflowerblue":'gray',backgroundColor:state.changeTextStylesFlag?"white":
                'blue'
            }}>Use Reducer Hook Example</h1>: null
        }
        <button onClick={()=>dispatch({type:HIDE_TEXT})}>Hide Text</button>
        <button onClick={()=>dispatch({type:SHOW_TEXT})} style={{marginLeft:'20px',marginRight:'20px'}}>Show Text</button>
        <button onClick={()=>dispatch({type:CHANGE_TEXT_STYLE})}>Toggle Text Style</button>
    </div>
}
export default UseReducerEx;