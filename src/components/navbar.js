import React from 'react';
import ProyectDetails from '../components/navbar_proyect_details';
import UserDetails from '../components/navbar_user_details';
import Sidebar from '../components/sidebar';

const NavBar = ({configuration}) => {

  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <ProyectDetails proyect={configuration.proyect}/>
      <UserDetails user={configuration.user}/>
      <Sidebar />
    </nav>
  );

}

export default NavBar;