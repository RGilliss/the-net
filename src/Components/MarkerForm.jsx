import React from 'react';
import FormControl from '@material-ui/core/FormControl'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import InputAdornment from '@material-ui/core/InputAdornment';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import useAxios from "axios-hooks";
import { post } from 'axios';



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

//Style species
function getStyles(name, fishName, theme) {
  return {
    fontWeight:
      fishName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


export default function MarkerForm(props) {
  // const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const classes = useStyles();
  const theme = useTheme();
  const [fishName, setFishName] = React.useState([]);

  //Tile(name)
  const [title, setTitle] = React.useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //Date
  const CurrentDate = new Date()
  const [date, setDate] = React.useState(formatDate(CurrentDate));


  const handleDateChange = (event) => {
    console.log("datechange", event.target.value)
    setDate(event.target.value);
  };

  //Formatting the date to work with date of today in our form
  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  console.log(formatDate('Sun May 11,2014'));



  //Species
  const [species, setSpecies] = React.useState("");
  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  //Rating
  const [rate, setRate] = React.useState("");
  const handleRateChange = (event) => {
    // console.log("handleRate...", event.target.value )
    setRate(event.target.value);
  };

  //textarea
  const [text, setText] = React.useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  //Picture link
  const [link, setLink] = React.useState("");
  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };



  //OnSubmit Button
  const onSubmit = (evt) => {
    console.log(props.marker);
    let pinForm = { title: title, date: date, species: species, rate: rate, text: text, link: link}
    post("http://localhost:8080/pins", pinForm)
      .then(() => { console.log("sent") })
    props.onClose();
  };


  // species in selector
  const [{ data, loading, error }] = useAxios(
    "https://angler-reg-api.herokuapp.com/species"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log("data_species", data.species)

  const returnData = data.species;


  


  return (

    <form className={classes.marker_form}>

      <FormControl>
        <InputLabel htmlFor="Name">Your Name</InputLabel>
        <Input name="title" onChange={handleTitleChange} id="Name" aria-describedby="my-helper-text" value={title} />
      </FormControl>



      <TextField
        id="date"
        type="date"
        value={date}
        name="date"
        onChange={handleDateChange}
      />


      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-name-label">Species</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          value={species}
          onChange={handleSpeciesChange}
          input={<Input />}
          MenuProps={MenuProps}
          name="species"
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
          name="rate"
          value={rate}
          precision={0.5}
          onChange={handleRateChange}
          onChangeActive={(event, newHover) => {
            setHover(newHover);
          }}
        />


        {rate !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rate]}</Box>}
      </div>



      <TextareaAutosize
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Your comments"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        name="text"
        value={text}
        onChange={handleTextChange}
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
          name="link"
          value={link}
          onChange={handleLinkChange}
        />
      </FormControl>

      <Button variant="contained" color="primary" onClick={onSubmit}>
        Submit
      </Button>


    </form>


  )
}