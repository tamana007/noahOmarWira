import React from 'react'
// import Milestones from '../../pages/Milestones'
import { NavLink } from 'react-router-dom'

function Header() {

  const leftNav = [
    { label: "Baby Moments", path: "/" },
    { label: "Milestones", path: "/milestones" },
    // { label: "Gallary", path: "/memories" },
    { label: "Treasures", path: "/gallary" },
  ];
  return (
    <>
    <div className='nav-menu'>
    <div className='left-menu'>
    <ul>
    {leftNav.map((nav)=>(<li>
      <NavLink key={nav.path} className={({ isActive }) => isActive ? "active" : "navlink"} to={nav.path}>{nav.label}</NavLink>
    </li>))}
      {/* <li>
        <NavLink to="/milestones">
        Baby Moments
        </NavLink>
        </li>
      <li>
        <NavLink to="/gallary" 
        className={({isActive})=>isActive?"active":""}>
        Smiles
        </NavLink>
        </li>
      <li>
        <NavLink to={"/"}>
        Memories
        </NavLink>
        </li> */}
      <li>Treasures</li>
      <li>Packs</li>
      <li>Tips</li>
      <li>More+</li>
    </ul>
    </div>
    <div className='right-menu'>
      <ul>
        <li>Explore</li>
        <li>Account</li>
        <li>Log out</li>
      </ul>
    </div>
    </div>
    <hr></hr>
    </>
  )
}

export default Header