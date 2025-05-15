import './App.css'
import AddNewBlog from './blog-app/add-new-blog'
import BlogList from './blog-app/blog-list'
import CounterButton from './counter-example/counter-button'
import CounterValue from './counter-example/counter-value'

function App() {

  return (
    <div>
      <h1 style={{color:'cornflowerblue'}}>BLOG APP</h1>
      {/* <CounterButton/>
      <CounterValue/> */}
      <AddNewBlog/>
      <BlogList/>
    </div>
  )
}

export default App
