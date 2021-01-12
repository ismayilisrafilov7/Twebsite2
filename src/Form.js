import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import styles from "./FormStyle";
import{withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React,{useContext} from 'react';
import {LanguageContext} from "./LanguageContext";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const words={
    azerbaijan:{
        signup:"Qeydiyyat",
        email:"E-mail ünvanı",
        password: "Parol",
        firstName:"Ad",
        lastName:"Soyad",
        flabel:"E-poçt vasitəsilə marketinq promosyonları və yeniləmələr almaq istəyirəm.",
        link:"Artıq bir hesabınız var mı? Daxil olun"

    },

    english:{
        signup:"Sign Up",
        email:"E-mail address",
        password: "Password",
        firstName:"First Name",
        lastName:"Last Name",
        flabel:"I want to receive marketing promotions and updates via email.",
        link:"Already have an account? Sign in"


    }

};


function SignUp(props) {


  
    const {classes}=props;
    const {language}=useContext(LanguageContext);
    const{email,password,firstName,lastName,signup,flabel,link}=words[language]
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {signup}
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="fname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label={firstName}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label={lastName}
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label={email}
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label={password}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label={flabel}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {signup}
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/formin" variant="body2">
                  {link}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    );
  }


export default withStyles(styles)(SignUp)

