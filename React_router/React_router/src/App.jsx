import { Route, Routes, useRoutes } from 'react-router-dom';
import './App.css'
import CommentList from './pages/comments';
import RecipeList from './pages/recipes';
import RecipeDetails from './pages/recipe-details';
import HomeDetails from './pages/home-page';
import NotFoundPage from './pages/not-found';
import Layout from './components/layouts';
import ChildRouteDemo from './pages/home-page/index2';
import ModalExample from './pages/recipes/useModal';
import ReactHookFormEx from './pages/react-hook-form';
import Hooks from './pages/hooks';
import UseMemoExample from './pages/hooks/use-memo';
import UseCallbackExample from './pages/hooks/use-callback hook';


// function CustomRoutes(){
//   const element=useRoutes([{
//     path:'/home', element:<Layout/>,
//     path:'/recipe-list', element:<RecipeList/>,
//     path:'/comment-list', element:<CommentList/>,
//     children:[
//       { path: 'child-demo', element:<ChildRouteDemo/>}
//     ]
//   },{
//     path:'*', element:<NotFoundPage/>
//   }
// ])
// return element
// }

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path='/home' element={<Layout/>}>
        <Route path='child-demo' element={<ChildRouteDemo/>}></Route>
        </Route>
        <Route path='/recipe-list' element={<RecipeList/>}/>
        <Route path='/comment-list' element={<CommentList/>}/>
        {/* dynamic route using ":" which is a key */}
        <Route path='/recipe-list/:id' element={<RecipeDetails/>}></Route>
        <Route path='/' element={<HomeDetails/>}></Route>
        <Route path='*' element={<NotFoundPage/>}/>
        <Route path='/modal' element={<ModalExample/>}></Route>
        <Route path='/react-hook-form' element={<ReactHookFormEx/>}></Route>
        <Route path='/use-hooks' element={<Hooks/>}></Route>
        <Route path='/use-memo' element={<UseMemoExample/>}></Route>
        <Route path='/use-callback' element={<UseCallbackExample/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App;
