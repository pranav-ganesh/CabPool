import NavBar from './NavBar.jsx';
import '../styling/login.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
//import GoogleIcon from '@mui/icons-material/Google';

function Login() {
  return (
    <div className="loginMain">
        <NavBar />
        <div className='loginBox'>
            <div className="loginCaption">Login</div>
            <div className="inputFields">
                <Button variant="contained" sx={{ width: '50%', color: 'white', fontWeight: 'bold'}}>Continue with Google</Button>
                <div style={{ fontWeight: 'bold' }}>OR</div>
                <TextField id="outlined-basic" label="Email address or username" variant="outlined" 
                    sx={{ width: '50%', color: 'success' }} />
                <TextField id="outlined-basic" label="Password" variant="outlined" 
                    style={{ width: '50%', color: 'white' }} />
                <Button variant="contained" sx={{ width: '50%', color: 'white', backgroundColor: 'green', fontWeight: 'bold' }}>Submit</Button>
                <div>Don't have an account?</div>
                <Link to={{ pathname: "/signup" }}><div>Create one now</div></Link>
            </div>            
        </div>
    </div>
  );
}

export default Login;