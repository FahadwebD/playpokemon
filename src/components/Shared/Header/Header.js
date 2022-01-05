import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


    

const Header = () => {

    const {loginWithPopup , loginWithRedirect, logout , user , isAuthenticated} = useAuth0()

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    console.log(JSON.stringify(user , null ,2))
    return (
        <div>
             <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', textAlign: 'center' , backgroundColor:'yellow'}}>
             <Link to='home' style={{marginRight:'15px' , textDecoration:'none'}}><Typography sx={{ minWidth: 100 }}>All Pokemon's</Typography></Link>
       {isAuthenticated? <Link to='fav' style={{marginRight:'15px' , textDecoration:'none'}}><Typography sx={{ minWidth: 100 }}>Favourite Pokemon's</Typography></Link>:<Button onClick={loginWithPopup} style={{marginRight:'15px'}}><Typography sx={{ minWidth: 100 }}>Not Logged IN</Typography></Button>}
      {isAuthenticated?  <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}><img style={{width:'100%' }} src={user.picture}  alt=''/></Avatar>
          </IconButton>
        </Tooltip>:  <Tooltip title="Account settings">
          <IconButton
            onClick={loginWithPopup}
            size="small"
            sx={{ ml: 2 }}
          >
            <Avatar sx={{ width: 32, height: 32 }}>NU</Avatar>
          </IconButton>
        </Tooltip>}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
          <Avatar /> {user?.nickname}
        </MenuItem>
        
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={logout}>
          <ListItemIcon >
            <Logout  fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
        </div>
    );
};

export default Header;