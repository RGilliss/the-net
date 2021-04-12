import React from 'react';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme  } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useAxios from "axios-hooks";



const useStyles = makeStyles((theme) => ({
  marker_form: {
    display: 'flex',
    flexDirection: 'column',
  },
  rating_root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
  add_picture: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },

}))

//Rating
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


//Species Menu
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const species = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, fishName, theme) {
  return {
    fontWeight:
      fishName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function MarkerForm(props) {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const classes = useStyles();
  const theme = useTheme();
  const [fishName, setFishName] = React.useState([]);


  const handleChange = (event) => {
    setFishName(event.target.value);
  };

  const onSubmit = (evt) => {
    console.log(props.marker);
    props.onClose();
  };


  const [{ data, loading, error }] = useAxios(
    "https://angler-reg-api.herokuapp.com/species"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log("data_species", data.species)

  const returnData = data.species;

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (

    <form className={classes.marker_form}>

      <FormControl>
        <InputLabel htmlFor="Name">Your Name</InputLabel>
        <Input id="Name" aria-describedby="my-helper-text" />
      </FormControl>


      <TextField
        id="date"
        type="date"
        defaultValue="2017-05-24"
      />

      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Species</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          multiple
          value={fishName}
          onChange={handleChange}
          input={<Input />}
          MenuProps={MenuProps}
        >
          {returnData.map((species) => (
            <MenuItem key={species.id} value={species.name} style={getStyles(species.name, fishName, theme)}>
              {species.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className={classes.rating_root}>
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

      <FormControl className={classes.add_picture}>
        <InputLabel htmlFor="input-with-icon-adornment">Add a link of your picture</InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AddAPhotoIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      <Button variant="contained" color="primary" onClick={onSubmit}>
        Submit
      </Button>


    </form>


  )
}