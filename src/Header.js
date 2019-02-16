import React, { Component } from 'react';
import $ from 'jquery';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleMenu() {
    $(".custom-select-btn .dropdown-menu a").click(function () {
      var selText = $(this).text();
      $(this).parents('.custom-select-btn').find('.dropdown-toggle').html(selText);
    });
  }

  /****** Go to profile *********/
  profile() {
    this.setState({
      isOpen: !this.state.isOpen
    });
    this.props.profile();
  }

  render() {
    const { logout, profile } = this.props;
    const { user, location, logo } = this.props.user;
    return (
      <div className="main_header unified_header">
        <nav className="navbar navbar-expand-lg custom-nav">
          <a className="navbar-brand" href="#">
            <img src={logo[0]} alt="" className="Big-logo" />
            <img
              src={logo[1]}
              alt=""
              className="Mobile-logo"
            />
          </a>
          <button className="navbar-toggler" onClick={() => this.toggleMenu()} type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon"><i className="fa fa-menu"></i></span>
          </button>

          <div className="collapse navbar-collapse main-nav" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li> */}
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                    </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                </div>
              </li> */}
              <li className="nav-item active">
                <a className="nav-link" href="https://core-01.qa.procurenetworks.com">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://order-fe-02.qa.procurenetworks.com">Order Request</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="https://inv-04.qa.procurenetworks.com">Inventory</a>
              </li>

            </ul>
            <form className="my-2 my-lg-0">
              {/* <div className="custom-select-btn btn-group">
                <a className="btn dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  Dropdown
                    </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <input type="search" />
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                </div>
              </div> */}
              <div className="dropdown profile-dropdown">
                <a className="btn dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <span className="Menu_icon">
                    <img src={user.user_metadata.photo_url}
                      alt={user && user.user_metadata ? user.user_metadata.first_name : ''} width="30" />
                  </span>
                  <span className="Username-btn">
                    {user && user.user_metadata ? user.user_metadata.first_name : ''}
                  </span>
                </a>
                <div className="dropdown-menu profile-drop-content" aria-labelledby="navbarDropdown">
                  <ul>
                    <li>
                      <span onClick={() => profile()}>
                        <p>
                          <i className="fa fa-suitcase" aria-hidden="true" />
                        </p>
                        <p>Profile</p>
                      </span>
                    </li>
                    <li>
                      <span className="signout-btn" onClick={() => logout()}>
                        <p>
                          <i className="fa fa-key" aria-hidden="true" />
                        </p>
                        <p>Logout</p>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
