import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import ConnectivityDropdown from 'components/dropdowns/connectivity'
// Hidden for current deployment
// import NotificationsDropdown from 'components/dropdowns/notifications'
import UserDropdown from 'components/dropdowns/user'

class NavBar extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.state = { searchQuery: '' }
  }

  handleChange(e) {
    this.setState({ searchQuery: e.target.value })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <button className="navbar-toggler mr-3" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="images/origin-icon-white.svg" alt="Origin menu" />
          </button>
          <Link to="/" className="navbar-brand mr-auto mr-lg-3">
            <div className="d-none d-lg-block logo-container">
              <img src="images/logo.jpg" className="origin-logo" alt="HelloNet Protocol" />
            </div>
          </Link>
          <div className="collapse navbar-collapse order-2 order-lg-1" id="navbarSupportedContent">
            {/* Hidden for current deployment */}
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search Listings" aria-label="Search" onChange={this.handleChange} value={this.state.searchQuery} />
            </form> */}
            <div className="navbar-nav justify-content-end">
              <Link to="/my-purchases" className="nav-item nav-link">You as an Agent</Link>
              <div className="sell dropdown">
                <a className="dropdown-toggle nav-item nav-link" id="sellDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">You as Company</a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sellDropdown">
                  <div className="triangle-container d-none d-lg-flex justify-content-end"><div className="triangle"></div></div>
                  <div className="actual-menu">
                    <Link to="/my-listings" className="dropdown-item">My Chat Requirements</Link>
                    <Link to="/my-sales" className="dropdown-item">My Agents</Link>
                    <Link to="/create" className="dropdown-item d-none d-lg-block">New Chat Requirements</Link>
                  </div>
                </div>
              </div>
              <Link to="/create" className="nav-item nav-link"><img src="images/add-listing-icon.svg" alt="Add Listing" className="add-listing" />Post Chat Requirements</Link>
            </div>
          </div>
          <div className="static navbar-nav order-1 order-lg-2">
            <ConnectivityDropdown />
            {/* Hidden for current deployment */}
            {/* <NotificationsDropdown /> */}
            <UserDropdown />
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
