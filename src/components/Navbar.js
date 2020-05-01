import React from "react";
import logo from "../img/assets/swasthforclincian-logo@3x.png";
import topBack from "../img/assets/top-bg@3x.png";

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
      <>
      <nav
        className={`navbar`}
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <a href='https://clinician.swasth.co/' className="navbar-item" title="Logo">
              <img src={logo} className='header-logo' alt="Kaldi" style={{ width: '88px' }} />
            </a>
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
              <a className="navbar-item transparent-btn" href='https://clinician.swasth.co/'>
                About Us
              </a>
              <a className="navbar-item transparent-btn" href='https://clinician.swasth.co/pricing'>
                Pricing
              </a>
              <a className="navbar-item transparent-btn" href='/'>
                Help
              </a>
              <a className="navbar-item transparent-btn login-btn" href='https://clinician.swasth.co/signin'>
                Login
              </a>
              <a className="navbar-item transparent-btn signup-btn" href='https://clinician.swasth.co/signup'>
                Signup Now
              </a>
            </div>
            </div>
        </div>
      </nav>
      { transparent ? "" :
      <div className="full-width-image margin-top-0 header-back">
          <img src={topBack} className="header-back-img"/>
         {/*  <img src={bannerIcon} className="home-back-icon"/> */}
      </div>
      }
    </>
    )
  }
}

export default Navbar
