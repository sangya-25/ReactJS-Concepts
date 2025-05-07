import { useContext } from "react";
import { GlobalContext } from "../../context";


function ContextButtonComponent(){
    const {handleChangeThemeOnButtonClick,theme}=useContext(GlobalContext);
    return <button onClick={handleChangeThemeOnButtonClick}>Change theme</button>
}
export default ContextButtonComponent;