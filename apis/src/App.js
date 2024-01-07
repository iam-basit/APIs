import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './layout/master'
import Home from './Home'
import Login from './Login'
import Register from './Register'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master />}>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
