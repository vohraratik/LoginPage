import { Button, CssBaseline, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import ChangePassword from './auth/ChangePassword';
import {Datetime} from './auth/Datetime';
import { Map } from './auth/map';
// import {actualData} from './auth/UserLogin';

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/login')
  }
  return <>
    <CssBaseline />
    <Grid container>
      <Grid item sm={24} sx={{ backgroundColor: 'gray', p: 5, color: 'white' }}>
        <h1>Dashboard</h1>
        {/* <Typography variant='h5'>Email:</Typography> */}
        {/* <Typography variant='h6'>Name: Sonam</Typography> */}
        <Datetime />
        <Map />
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
    </Grid>
  </>;
};

export default Dashboard;
