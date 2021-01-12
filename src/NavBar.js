import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import{withStyles} from '@material-ui/core/styles';
import styles from './NavBarstyle';
import { MenuItem } from '@material-ui/core';
import {ThemeContext} from "./ThemeContext"
import { Link } from 'react-router-dom';
import {LanguageContext} from "./LanguageContext";
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';



const content={
  azerbaijan:{
      signup:"Qeydiyyat",
      login:"Daxil ol",
      header: "TWEBSAYT",
      

  },

  english:{
    signup:"Sign Up",
    login:"Login",
    header: "TWEBSITE",

  }

};

function NavBar(props) {
  
        
        const {classes}= props;
        const{isDarkMode,toggleTheme}=useContext(ThemeContext);
        const{language,changeLanguage}=useContext(LanguageContext);
        const{signup,login,header}=content[language];

        const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

        return (
            <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
            <Toolbar>
           
              <Typography variant="h6" className={classes.title}>
                <Link to="/" style={{textDecoration:"none"}}>{header}</Link>
              </Typography>
              {auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                  <MenuIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                  >
                    <MenuItem style={{display:"flex",flexDirection:"column"}} onClick={handleClose}>
                    <Switch onChange={toggleTheme}/>
                    <Select value={language} onChange={changeLanguage}>
                      <MenuItem value="azerbaijan">Azerbaijan</MenuItem>
                      <MenuItem value="english">English</MenuItem>
                    </Select>
                    <Link to="/formin"><Button color="inherit">{login}</Button></Link>
                    <Link to="/form"><Button color="inherit">{signup}</Button></Link></MenuItem>
                    
                  </Menu>
                </div>
              )}
          
            </Toolbar>
          </AppBar>
            </div>
        )
    }


export default withStyles(styles)(NavBar)
