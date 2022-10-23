import NavBar from './NavBar.jsx'
import '../styling/home.css';
import Button from '@mui/material/Button';

function Home() {
  return (
    <div className="homeMain">
      <NavBar/>
      <hr className="line"></hr>
      <div className="homeBody">
        <div className='mainCaption'>Feel tired of buses and trains? Take a Cab everywhere with CabPool</div>
        <div className='description'>CabPool allows you to sync with other people who are going to similar destinations at similar times. 
          Share a cab ride with others and save your precious time, money and energy </div>
        <img src="https://www.pngall.com/wp-content/uploads/11/Tuning-Car-PNG-Photo.png" alt="Car" />
        <Button variant="contained" style={{fontWeight:'bold', fontSize: '1.5rem', marginLeft: '5em'}}>Get started Now</Button>
      </div>
    </div>
  );
}

export default Home;