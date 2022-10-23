import '../styling/navBar.css';

function NavBar() {
    return (
      <div className="navBarMain">
          <h1 className="logo">CabPool</h1>
          <h2 className="item about">Get Started</h2>
          <h2 className="item login">Login</h2>
          <h2 className="item sign-up">Sign up</h2>
          <h2 className="item faq">About</h2>
      </div>
    );
  }
  
  export default NavBar;