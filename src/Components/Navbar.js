import React from 'react'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className='nav'>
        <Link to='/' className='title'>Astoon</Link>
        <ul>
            <CustomLink to='/About' className='side'>About</CustomLink>
            <CustomLink to='/TopHeadline' className='side'>Top News</CustomLink>
        </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

export default Navbar