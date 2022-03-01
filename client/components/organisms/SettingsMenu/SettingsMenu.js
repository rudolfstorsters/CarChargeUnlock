import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import R from 'ramda';

import Menu from 'react-bulma-companion/lib/Menu';
import Box from 'react-bulma-companion/lib/Box';

import { attemptLogout } from '_thunks/auth';

export default function SettingsMenu({ pathname }) {
  const dispatch = useDispatch();

  const logout = () =>
    dispatch(attemptLogout())
      .catch(R.identity);

  return (
    <Box>
      <Menu className="settings-menu">
        
      <Menu.Label>
         Account
        </Menu.Label>
        <Menu.List>
          <Menu.ListItem>
            <Menu.Link
              to="/settings/account"
              active={pathname.includes('account')}
              component={Link}
            >
            General
            </Menu.Link>
          </Menu.ListItem>
      
        <Menu.Label>
          Settings
        </Menu.Label>
       
          <Menu.ListItem>
            <Menu.Link
              to="/settings/change-email"
              active={pathname.includes('change-email')}
              component={Link}
            >
             Change Email
            </Menu.Link>
          </Menu.ListItem>
          <Menu.ListItem>
            <Menu.Link
              to="/settings/change-password"
              active={pathname.includes('change-password')}
              component={Link}
            >
             Change Password
            </Menu.Link>
          </Menu.ListItem>
          <Menu.ListItem>
            <Menu.Link onClick={logout} onKeyPress={logout}>
              Logout
            </Menu.Link>
          </Menu.ListItem>
        </Menu.List>
      </Menu>
    </Box>
  );
}

SettingsMenu.propTypes = {
  pathname: PropTypes.string.isRequired,
};
