import React from 'react'
import { FaListAlt, FaCheckSquare, FaTrash, FaPlusSquare} from "react-icons/fa";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <footer className="d-flex justify-content-between bg-success-subtle bg-gradient p-3" id="mainFooter">
            <div className="btn-group">
                <Link to="/" className="btn btn-outline-success bg-success-subtle"><FaListAlt/></Link>
                <Link to="completed" className="btn btn-outline-success bg-success-subtle"><FaCheckSquare/></Link>
                <Link to="/add-task" className="btn btn-outline-success bg-success-subtle"><FaPlusSquare/></Link>
            </div>
            <button className="btn btn-outline-success bg-success-subtle"><FaTrash/></button>
        </footer>
    </>
  )
}

export default NavBar
