import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../../static/img/swasth-clinicians.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    const { transparent } = this.props;
    return (
      <nav
        className={`navbar ${!transparent ? 'colored-header' : ''}`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
           <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-end has-text-centered">
              <Link className="navbar-item transparent-btn" to="/">
                About
              </Link>
              <Link className="navbar-item transparent-btn" to="/">
                Pricing
              </Link>
              <Link className="navbar-item transparent-btn" to="/">
                Help
              </Link>
              <div className="navbox-action-item">
              <Link className="navbar-item transparent-btn" to="/">
                Login
              </Link>
              <Link className="navbar-item bt-action-btn" to="/">
                Signup
              </Link>
              </div>
            </div>
            </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
