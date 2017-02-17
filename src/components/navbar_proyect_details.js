import React from 'react';
import { Link } from 'react-router';

const NavBarProyectDetails = ({proyect}) => {
	return (
		<div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
        <span className="sr-only">Toggle navigation</span>
       	<span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <Link to="/home" className="navbar-brand">{proyect.name}</Link>
    </div>
	);
}

export default NavBarProyectDetails;