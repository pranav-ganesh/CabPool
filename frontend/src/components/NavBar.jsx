import '../styling/navBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
      <div className="navBarMain">
          <Link to={{ pathname: "/" }} style={{ textDecoration: 'none', color: 'white' }}><h1 className="logo">CabPool</h1></Link>
          <h2 className="item about">Get Started</h2>
          <Link to={{ pathname: "/login" }} style={{ textDecoration: 'none', color: 'white' }}><h2 className="item login">Login</h2></Link>
          <Link to={{ pathname: "/signup" }} style={{ textDecoration: 'none', color: 'white' }}><h2 className="item sign-up">Sign up</h2></Link>
          <h2 className="item faq">About</h2>
      </div>
    );
  }
  
  export default NavBar;