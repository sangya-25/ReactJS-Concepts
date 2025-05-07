import './App.css'
import ClassBasedComponent from './components/class-based-components';
import ContextButtonComponent from './components/context-concept/button';
import ContextTextComponent from './components/context-concept/text';
import FormComponent from './components/form';
import LoginComponent from './components/login';
import ProductList from './components/products'
import RegisterComponent from './components/register';
import UseReducerEx from './components/use-reducer';
import Users from './components/Users';

const dummyProductData=['Product 1','Product 2','Product 3'];

function App() {
  return (
    <>
    <div>
      <h1 style={{color:"cornflowerblue"}}>React JS concepts</h1>
      {/* <ProductList dummyProductData_key={dummyProductData} name ="Sangya Ojha" city="Delhi" job="Engineer"/>
      <ClassBasedComponent/> */}
      {/* <Users/> */}
      {/* <ContextButtonComponent/>
      <ContextTextComponent/> */}
      {/* <UseReducerEx/> */}
      {/* <FormComponent/> */}
      <div style={{display:'flex',gap:'90px'}}>
        <LoginComponent/>
        <RegisterComponent/>
      </div>
    </div>
    </>
  )
}
export default App


