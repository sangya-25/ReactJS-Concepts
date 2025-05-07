import { useParams } from "react-router-dom"

function RecipeDetails(){
    const params=useParams();
    const {id}=params;
    return(
        <div>
            <h1>Recipe Details of the Recipe item <span style={{color:"cornflowerblue"}}>{id}</span></h1>
        </div>
    )
}
export default RecipeDetails