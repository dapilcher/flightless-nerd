import { Component } from "react";
import Link from "next/link";
import Logo from './Logo';
import Navbar from './Navbar';

class Header extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    // if (window.o)
  }


  render() {
    return (
      <React.Fragment>
        <style jsx>{`
					.header {
						position: relative;
            width: 100%;
            
					// position: sticky;
					top: 0;
						z-index:50;
						background-color: #586CFF;
						background-image: linear-gradient(to bottom right, #586CFF, #2539CC);
						font-family: Raleway;
						font-size: 1.2rem;
						display: flex;
						flex-direction: column;
						border-bottom: 0.5rem solid #EB3E34;
					}

					@media (min-width: 992px) {
						.header {
							flex-direction: row;
						}
          }

					@media (min-width: 1026px) {
						.header {
							// font-size: 1.2rem;
						}
          }
          

		`}</style>
        <header className="header">
          <Logo />
          <Navbar />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
