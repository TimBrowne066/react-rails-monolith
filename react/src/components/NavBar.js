import React from 'react';
import { Link } from 'react-router'

const NavBar = props => {
  return(
    <div>
      <Link to='/cereals'>All Cereals</Link>
      {props.children}
    </div>
  )
}

export default NavBar;
