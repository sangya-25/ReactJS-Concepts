import './App.css'
import CounterValue from './couter-app/counter-value'
import ManageCounter from './couter-app/manage-counter'
import Products from './prodcuts'

function App() {

  return (
    <div>
      <h1>React with zustand</h1>
      <ManageCounter/>
      <CounterValue/>
      <Products/>
    </div>
  )
}

export default App
