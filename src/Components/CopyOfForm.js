import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  marker_form: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function MarkerForm(props) {

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

      <Button variant="contained" color="primary" onClick={onSumbit}>
        Submit
        </Button>


    </form>


  )
}




import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';



export default function MarkerForm(props) {
 
  const onSumbit = (evt) => {
    console.log(props.marker);
    props.onClose();
  }


  return (
      <FormControl >
        <InputLabel htmlFor="Name">Name</InputLabel>
        <Input id="Name" aria-describedby="my-helper-text" />
        <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
        />
        
        <Input id="Type of fish" aria-describedby="my-helper-text" />
        <InputLabel htmlFor="Type of fish">Type of fish</InputLabel>
        <Button variant="contained" color="primary" onClick={onSumbit}>
          Submit
        </Button>
      </FormControl>
  )
}
