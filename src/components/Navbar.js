import React from 'react'
import Code from './Code';
import Login from './LoginForm';
import Register from './RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Routes, 
  Route,
  Link
} from 'react-router-dom';
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">Code Editor with React & laravel </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to="/">LOGIN</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">REGISTER</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='/code'>CODE EDITOR</Link>
        </li>
      </ul>
    </div>
  </div>
</nav> 
<div className='container'>
  <Routes>
    <Route path='/code' element={<Code />}></Route>
    <Route path='/' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
  </Routes>
</div> 
    </>
  )
}

export default Navbar