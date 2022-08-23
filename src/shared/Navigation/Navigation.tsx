import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import GlobalSvgSelector from "../../assets/icons/GlobalSvgSelector";
import s from "./Navigation.module.scss";

import { useLocation } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    console.log('hi');
    
    setIsMenuOpen(prev => !prev);
  };

  const location = useLocation();


  return (
    <nav className={s.navigation}>
      <button className={s.navigation__closeBtn} onClick={handleMenu}></button>
      <ul
        className={`${s.navigation__navigationItems} ${
          isMenuOpen ? null : s.navigation__navigationItems_close
        }`}
      >
        <li className={s.navigation__navigationItem}>
          <NavLink
            to="/messenger"
            exact
            activeClassName={s.navigation__link_active}
            className={s.navigation__link}
          >
            <GlobalSvgSelector id={"messenger"} location={location} />
          </NavLink>
        </li>
        <li className={s.navigation__navigationItem}>
          <NavLink
            to="/question"
            exact
            activeClassName={s.navigation__link_active}
            className={s.navigation__link}
          >
            <GlobalSvgSelector id={"question"} location={location} />
          </NavLink>
        </li>
        <li className={s.navigation__navigationItem}>
          <NavLink
            to="/bell"
            exact
            activeClassName={s.navigation__link_active}
            className={s.navigation__link}
          >
            <GlobalSvgSelector id={"bell"} location={location} />
          </NavLink>
        </li>
        <li className={s.navigation__navigationItem}>
          <NavLink
            to="/operator"
            exact
            activeClassName={s.navigation__link_active}
            className={s.navigation__link}
          >
            <GlobalSvgSelector id={"operator"} location={location} />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
