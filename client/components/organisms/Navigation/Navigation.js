import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import R from 'ramda';
import Logo from './home-image.png';

export default function Navigation({ pathname }) {
  const { user } = useSelector(R.pick(['user']));

  const [auth, setAuth] = useState(!R.isEmpty(user));
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAuth(!R.isEmpty(user));
  }, [user.username]);

  const toggleDropdown = () => setOpen(!open);

  const closeDropdown = () => setOpen(false);

  const isHome = (pathname.length === 5)
    ? pathname === '/home'
    : R.slice(0, 6, pathname) === '/home/';

  const isTodo = (pathname.length === 5)
    ? pathname === '/todo'
    : R.slice(0, 6, pathname) === '/todo/';

  const isSettings = (pathname.length === 9)
    ? pathname === '/settings'
    : R.slice(0, 10, pathname) === '/settings/';

  return (
    <>
         <div className="navBar">
          <Link to="/">
          <img src={Logo} alt="Logo" />
          </Link>
          <div className="navMenu">
              <div className="navBtn">
                  <Link className="authButton" to="/login">LOGIN</Link>                
              </div>
          </div> 
         </div> 
      </>
  );
}

Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};
