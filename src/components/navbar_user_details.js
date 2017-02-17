import React from 'react';

const NavBarUserDetails = ({user}) => {
	return (
    <ul className="nav navbar-right top-nav">
      <li><a>{user.name}</a></li>
      <li><a>{user.type}</a></li>
    </ul>
	);
}

export default NavBarUserDetails;