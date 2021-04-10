import React from 'react';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



const useStyles = makeStyles((theme) => ({
  marker_form: {
    display: 'flex',
    flexDirection: 'column',
  },
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
}))

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

export default function MarkerForm(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const classes = useStyles();

  const onSumbit = (evt) => {
    console.log(props.marker);
    props.onClose();
  }


  return (

    <form className={classes.marker_form}>

      <FormControl>
        <InputLabel htmlFor="Name">Name</InputLabel>
        <Input id="Name" aria-describedby="my-helper-text" />
      </FormControl>


      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
      />

      <FormControl>
        <InputLabel htmlFor="Type of fish">Type of fish</InputLabel>
        <Input id="Type of fish" aria-describedby="my-helper-text" />
      </FormControl>

      <div className={classes.root}>
        <Rating
          name="hover-feedback"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />
        {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
      </div>

      <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Maximum 4 rows"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
      />

      <Button variant="contained" color="primary" onClick={onSumbit}>
        Submit
      </Button>


    </form>


  )
}