import { Component, Fragment } from "react";
import Logo from './Logo';
import Navbar from './Navbar';
import ResponsiveWidthContainer from './ResponsiveWidthContainer';

class Header extends Component {
  state = {
    navbarSticky: false,
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    if (this.navbarItem != null) {
      if (window.pageYOffset > this.navbarItem.offsetTop) {
        if (!this.state.navbarSticky) this.setState({ navbarSticky: true });
      } else {
        if (this.state.navbarSticky) this.setState({ navbarSticky: false });
      }
    }
  }


  render() {
    return (
      <Fragment>
        <style jsx>{`
        .header__container {
          position: relative;
          z-index: 100;
          width: 100%;
          background-color: #586CFF;
          background-image: linear-gradient(to bottom right, #586CFF, #2539CC);
          background: linear-gradient(to bottom right, #586CFF4D, #2539CCCC), url("https://www.transparenttextures.com/patterns/cubes.png"), linear-gradient(to bottom right, #586CFF, #2539CC);
          font-family: Raleway;
          font-size: 1.2rem;
          border-bottom: 0.3rem solid #EB3E34;
          display: flex;
          justify-content: center;
          transition: 300ms linear;
          box-shadow: 0 1px 20px rgba(0,0,0,0.5);
        }
        .sticky {
          position: sticky;
          top: 0;
        }
        .header {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .header__container {
            border-bottom-width: 0.5rem;
          }
          .header {
            flex-direction: row;
            // flex-wrap: wrap;
          }
        }
        `}</style>
        <header className={`header__container ${this.state.navbarSticky && 'sticky'}`}>
          <ResponsiveWidthContainer>
            <div className="header">
              <Logo showLogo={!this.state.navbarSticky} />
              <Navbar navbarItemRef={e => (this.navbarItem = e)} navbarSticky={this.state.navbarSticky} />
            </div>
          </ResponsiveWidthContainer>
        </header>
      </Fragment>
    );
  }
}

export default Header;
