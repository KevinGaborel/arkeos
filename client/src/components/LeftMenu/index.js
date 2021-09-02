import React from 'react'

import HomeIcon from '@material-ui/icons/Home';
import { slide as Menu } from "react-burger-menu";

import LeftMenuItems from '../LeftMenuItems'
import MessageIcon from '@material-ui/icons/Message';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import InsertInvitationIcon from '@material-ui/icons/InsertInvitation';
import { NavLink } from 'react-router-dom'
import GavelIcon from '@material-ui/icons/Gavel';


import './styles.scss'


const LeftMenu = () => {

  let token = localStorage.getItem('token')

  return (



    <div className="leftmenu">
      <Menu >

        <NavLink exact to="/" style={{ outline: 'none' }}>
          <LeftMenuItems name="Accueil" Icon={HomeIcon} />
        </NavLink>

        {token ?
        <NavLink to="/message" style={{ outline: 'none' }}>
          <LeftMenuItems name="Messagerie" Icon={MessageIcon} />
        </NavLink>
:
        <NavLink to="/messages/log" style={{ outline: 'none' }}>
          <LeftMenuItems name="Messagerie" Icon={MessageIcon} />
        </NavLink>}

        {token ?
          <NavLink to="/profile" style={{ outline: 'none' }}>
            <LeftMenuItems name="Profil" Icon={PersonIcon} />
          </NavLink>
          : <NavLink to="/profil/log" style={{ outline: 'none' }}>
            <LeftMenuItems name="Profil" Icon={PersonIcon} />
          </NavLink>
        }

        <NavLink to="/marketplace" style={{ outline: 'none' }}>
          <LeftMenuItems name="Marketplace" Icon={ShoppingCartIcon} />
        </NavLink>

        {token ?
          <NavLink to="/members" style={{ outline: 'none' }}>
            <LeftMenuItems name="Membres" Icon={PeopleIcon} />
          </NavLink>
          : <NavLink to="/member/log" style={{ outline: 'none' }}>
            <LeftMenuItems name="Membres" Icon={PeopleIcon} />
          </NavLink>}



        <NavLink to="/legislation" style={{ outline: 'none' }}>
          <LeftMenuItems name="Législation" Icon={GavelIcon} />
        </NavLink>
      </Menu>




    </div>
  )
}

export default LeftMenu
