import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends PureComponent {
  render() {
    return (
      <nav className="header-component nav navbar-default">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Bookmark</Link>
          <ul className="navbar-nav nav navbar-right">
            {!this.props.auth && <li><Link to="signin">Sign In</Link></li>}
            {this.props.auth && <li><Link to="signout">Sign Out</Link></li>}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  auth : React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    auth : state.auth
  };
}

export default connect(mapStateToProps)(Header);
