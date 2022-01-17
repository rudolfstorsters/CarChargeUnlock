import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { push } from 'connected-react-router';
import R from 'ramda';
import Logo from './home-image.png';

class NavigationComponent extends React.Component {

  /*export default function Navigation({ pathname }) {
    const { user } = useSelector(R.pick(['user']));
    const [auth, setAuth] = useState(!R.isEmpty(user));


    useEffect(() => {
    setAuth(!R.isEmpty(user));
  }, [user.username]);

  componentDidUpdate(prevProps, nextProps) {
    
    const {
      pushRoute,
      user,
    } = nextProps;
    
    if (R.isEmpty(user)) {
      pushRoute("/login");
    }
  }
  */



  render() {

    const {
      user,
    } = this.props;

    const auth = !R.isEmpty(user);

    return (
      <>
        <div className="navBar">
          {auth ?
            <Link to={"/dashboard"}>
              <img src={Logo} alt="Logo" />
            </Link>
            :
            <Link to={"/"}>
              <img src={Logo} alt="Logo" />
            </Link>}
          <div className="navMenu">
            <div className="navBtn">
              {auth ?
                <Link className="authButton" to="/settings">ACCOUNT</Link>
                :
                <Link className="authButton" to="/auth/login">LOGIN</Link>}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default connect(
  (state) => ({
    user: state.user,
  }),
  (dispatch) => ({
    pushRoute: (route) => dispatch(push(route)),
  })
)(NavigationComponent);

/*Navigation.propTypes = {
  pathname: PropTypes.string.isRequired,
};
*/