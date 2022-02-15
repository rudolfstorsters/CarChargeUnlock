import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router';
import ReactNotification from 'react-notifications-component';
import { useDispatch } from 'react-redux';
import R from 'ramda';

import { attemptGetUser } from '_thunks/user';

import WelcomePage from '_pages/WelcomePage';
import DashboardPage from '_pages/DashboardPage';
import SettingsPage from '_pages/SettingsPage';
import LostPage from '_pages/LostPage';
import ScanPage from '_pages/ScanPage';
import AuthPage from '_pages/AuthPage';
import ResultsPage from '_pages/Results';
import TermsPage from '_pages/TermsPage';
import PrivacyPage from '_pages/PrivacyPage';
import AddCar from '_pages/DashboardPage/AddCarPage'
import AuthMethod from '_pages/DashboardPage/AuthMethod'

import Navigation from '_organisms/Navigation';

export default function Main({ location }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let subscribed = true;

    dispatch(attemptGetUser())
      .then(() => subscribed && setLoading(false))
      .catch(R.identity);

    return () => { subscribed = false; };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return !loading && (
    <div>
      <ReactNotification />
      <Navigation pathname={location.pathname} />
      <div className="main">
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/results/:status" component={ResultsPage} />
          <Route path="/scan" component={ScanPage} />
          <Route path="/auth/:type" component={AuthPage} />
          <Route path="/auth/:type/:token" component={AuthPage} />
          <Route path="/auth" component={AuthPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/add/:type" component={AuthMethod} />
          <Route path="/add" component={AddCar} />
          <Route path="*" component={LostPage} />
        </Switch>
      </div>
    </div>
  );
}

Main.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};
