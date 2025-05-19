import './App.css'
import ApiCallTest from './components/api-testing'
import Child from './components/child'
import Counter from './components/counter'
import HelloWorld from './components/hello-world'

function App() {

  return (
    <div>
      <h1>React unit testing using JEST</h1>
      <HelloWorld/>
      <Counter/>
      <Child/>
      <ApiCallTest/>
    </div>
  )
}

export default App
