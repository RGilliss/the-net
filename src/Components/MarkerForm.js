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
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        />
        <Button variant="contained" color="primary" onClick={onSumbit}>
          Submit
        </Button>
      </FormControl>
  )
}
