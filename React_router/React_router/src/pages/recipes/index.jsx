import {useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import UseFetch from '../../hooks/use-fetch';
import { use, useRef, useState } from 'react';
import useWindowResize from '../../hooks/use-window-resize';

function RecipeList(){
    // const location=useLocation();
    const navigate=useNavigate()
    const {data,loading,error}= UseFetch('https://dummyjson.com/recipes');
    // const windowSize=useWindowResize()
    const windowSize=useWindowResize()
    if(loading){
        return <h1>Fetching Recipes! Please Wait...</h1>
    }
    return(
        <div>
            <h1 style={{color:windowSize.width<1033?'red':'cornflowerblue'}}>Recipe List page</h1>
            <h3>Current window width is {windowSize.width} and current height is {windowSize.height}</h3>
            <select style={{width:"100px", height:'43px', border:'2px solid cornflowerblue',borderRadius:'7px',marginRight:'10px', fontSize:'16px'}} name="menu-bar" id="">
                <option value="">Menu Bar</option>
                <option value="">Home</option>
                <option value="">Comment List</option>
                <option value="">Recipe Details</option>
            </select>
            <button onClick={()=>navigate('/')} style={{marginRight:'10px',border:'2px solid cornflowerblue'}}>Home</button>
            <button onClick={()=>navigate('/comment-list')} style={{border:'2px solid cornflowerblue'}}>Comment List</button>
            <ul>
                {
                    data?.recipes?.length > 0 ?
                    data.recipes.map(recipeItem => (
                    <li style={{display:'grid', gap:"2px"}} key={recipeItem.id}>
                        <img style={{width:'500px', border:'4px solid black'}} src={recipeItem.image} />
                        <label style={{fontSize:'20px',textDecoration:'underline', textDecorationColor:"cornflowerblue"}}>{recipeItem.name}</label>
                    </li>
                    ))
                    : null 
                }
            </ul>
        </div>
    );
}
export default RecipeList;