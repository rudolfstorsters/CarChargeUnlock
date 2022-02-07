import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { Link } from 'react-router-dom';
import R from 'ramda';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';

import DashboardCardComponent from '../../common/dashboardCard';

class DashboardPageComponent extends React.Component {

  componentDidMount() {
    if (R.isEmpty(this.props?.user ?? {})) {
      this.props?.pushRoute?.('/auth/login');
    }
  }

  render() {

    const {
      user,
    } = this.props;
    const auth = !R.isEmpty(user)

    const cars = [
      {
        name: "Arnolds",
        allowCharge: false,
        rangeVal: 20,
      },
      {
        name: "Arnolds2",
        allowCharge: true,
        rangeVal: 50,
      },
      {
        name: "Arnolds3",
        allowCharge: false,
        rangeVal: 70,
      },
      {
        name: "Arnolds3",
        allowCharge: true,
        rangeVal: 90,
      },
    ];

    return (
      <div className="welcome-page page dashboardPage">
        <Section>
          <Container>
            <Title size="1">
            </Title>
            <div className='cardContainer'>
              <div className='innerCardContainer'>
                {cars.map((car, index) => (
                  <DashboardCardComponent key={index} {...car} />
                ))}
              </div>
            </div>
            <Link to={auth ? "/add" : "../auth/login"}>
              <div className="homeNavBtn">
                + ADD CAR
              </div>
            </Link>
          </Container>
        </Section>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  pushRoute: (route) => dispatch(push(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPageComponent);
