import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import Section from 'react-bulma-companion/lib/Section';
import Container from 'react-bulma-companion/lib/Container';
import Title from 'react-bulma-companion/lib/Title';

class DashboardPageComponent extends React.Component {

  render() {

    const {
      user,
    } = this.props;

    return (
      <div className="welcome-page page">
        <Section>
          <Container>
            <Title size="1">
              Welcome {user.name}!
            </Title>
          </Container>
        </Section>
      </div>
    );
  }
}
const mapStateToProps = ({user}) => ({
  user,
});
const mapDispatchToProps = (dispatch) => ({
  pushRoute: (route) => dispatch(push(route))
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPageComponent);
