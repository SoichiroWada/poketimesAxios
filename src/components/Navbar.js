import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  console.log('props in Nav:', props)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="brand-logo" to="/">Poke' Times2</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
          <li><NavLink to='/test1'>Test1</NavLink></li>
          <li><NavLink to='/test12'>Test12</NavLink></li>
          <li><NavLink to='/test45'>Test45</NavLink></li>
          <li><NavLink to='/test55'>Test55</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
export default withRouter(Navbar)
