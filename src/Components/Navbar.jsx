import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBar:{
    backgroundColor: '#cfd8dc',
    margin: 0,
    height: "6em"
  },
  logo:{
    marginRight: '10px'
  },
  typo:{
    fontFamily: "Papyrus"
  }
  

}));

export default function DenseAppBar() {
  const classes = useStyles();
 

  return (
   
    <div className={classes.root}>
    
      <AppBar position="static" className={classes.navBar} >
        <Toolbar variant="dense">
        <img src="favicon.ico" alt="logo" className={classes.logo} />
            
          <Typography variant="h4" className={classes.typo}>
            The Net
          </Typography>
        </Toolbar>
      </AppBar>
    
      </div>
      
  );
}
