import { Route, Routes } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/login'
import RegisterPage from './pages/register'
import AuthRoute from './pages/private-route'
import ProfilePage from './pages/profile'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/profile' element={
          <AuthRoute>
            <ProfilePage/>
          </AuthRoute>
        }/>
      </Routes>
    </div>
  )
}

export default App
