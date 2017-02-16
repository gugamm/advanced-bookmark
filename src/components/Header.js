import React, { PureComponent } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Header extends PureComponent {
  render() {
    return (
      <nav className="header-component nav navbar-inverse">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Bookmark</Link>
          <ul className="navbar-nav nav navbar-right">
            {!this.props.authenticated && <li><Link to="signin">Sign In</Link></li>}
            {this.props.authenticated && <li><Link to="signout">Sign Out</Link></li>}
          </ul>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  authenticated : React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    authenticated : state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
