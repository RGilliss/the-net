import React from 'react';
import "./App/App.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Switch from '@material-ui/core/Switch';
import { Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirect: 'column',
    width: '100%'
  },
  navLeft: {
    // flexGrow: 1,  
    display: 'flex',
    justifyContent: 'space-between'
  },
  navRight: {
    display: 'flex',
    flexDirection: 'space-between'
  },
  toggle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '150px'
  },
  navBar: {
    display: 'flex',
    backgroundColor: '#cfd8dc',
    margin: 0,
    height: "6em",
    width: '100%'
  },
  typo: {
    fontFamily: 'Kaushan Script',
  },
  toolbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}));

export default function DenseAppBar(props) {
  const classes = useStyles();
  return (

    <div className={classes.root}>

      <AppBar position="static" className={classes.navBar} >
        <Toolbar className={classes.toolbar} variant="dense">

          <div className={classes.navLeft}>
            <img src="favicon.ico" alt="logo" className={classes.logo} />

            <Typography variant="h4" className={classes.typo}>
              The Net
          </Typography>
          </div>
          <div>
          <Typography component="div">
            <Grid className={classes.toggle} component="label"  spacing={1}>
              <Grid item>Search Location</Grid>
               <Grid item>
                <Switch 
                  value="checkedA" 
                  inputProps={{ 'aria-label': 'Switch A' }} 
                  onClick={() => props.setSearch(!props.search)} 
                  className={classes.searchSwitch}
                  size={'large'}
                />
             </Grid>
              <Grid item>Search Pins</Grid>
            </Grid>
          </Typography>
          </div>
          
          <div className={classes.navRight}>
          <Avatar alt="Avatar Remy Sharp" src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg" />

          </div>

        </Toolbar>
      </AppBar>

    </div>

  );
}
