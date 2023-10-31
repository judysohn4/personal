import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
      <span data-theme = "winter">
      <div className="navbar bg-base-100">
      <div className="flex-1">
      <Link className = "btn btn-ghost normal-case text-xl" to = {"/"}>judy sohn</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 text-xl">
        <li><Link to = {"/"}>Home</Link></li>
        <li><Link to = {"/portfolio"}>Portfolio</Link></li>
        </ul>
      </div>
    </div>
    </span>
    )
}

export default Navbar