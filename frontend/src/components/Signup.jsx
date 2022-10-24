import NavBar from './NavBar.jsx';
import '../styling/signup.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signupMain">
        <NavBar />
        <div className='signupBox'>
            <div className="signupCaption">Sign up</div>
            <div className="inputFields">
                <Button variant="contained" sx={{ width: '50%', color: 'white', fontWeight: 'bold'}}>Continue with Google</Button>
                <div style={{ fontWeight: 'bold' }}>OR</div>
                <TextField id="outlined-basic" label="Email address or username" variant="outlined" 
                    sx={{ width: '50%', color: 'success' }} />
                <TextField id="outlined-basic" label="Password" variant="outlined" 
                    style={{ width: '50%', color: 'white' }} />
                <Button variant="contained" sx={{ width: '50%', color: 'white', backgroundColor: 'green', fontWeight: 'bold' }}>Create an account</Button>
                <div>Already have an account?</div>
                <Link to={{ pathname: "/login" }}><div>Login now</div></Link>
            </div>
            
        </div>
    </div>
  );
}

export default Signup;