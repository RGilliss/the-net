import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    flexDirect: 'column'

  },
  navLeft: {
    flexGrow: 1,
    display: 'flex',
  },


  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBar: {
    backgroundColor: '#cfd8dc',
    margin: 0,
    height: "6em"
  },
  logo: {
    marginRight: '10px'
  },
  typo: {
    fontFamily: 'Kaushan Script',
  },
  

}));

export default function DenseAppBar() {
  const classes = useStyles();


  return (

    <div className={classes.root}>

      <AppBar position="static" className={classes.navBar} >
        <Toolbar variant="dense">

          <div className={classes.navLeft}>
            <img src="favicon.ico" alt="logo" className={classes.logo} />

            <Typography variant="h4" className={classes.typo}>
              The Net
          </Typography>
          </div>

          <Avatar alt="Avatar Remy Sharp" src="https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166__340.jpg" />

        </Toolbar>
      </AppBar>

    </div>

  );
}
