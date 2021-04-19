import { useEffect, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import CardMedia from "@material-ui/core/CardMedia";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputAdornment from "@material-ui/core/InputAdornment";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import axios from "axios";
const _ = require('lodash');
const assign = require('lodash.assign');

const useStyles = makeStyles((theme) => ({
  marker_form: {
    display: "flex",
    flexDirection: "column",
    width: "20rem",
  },
  date_root: {
    marginTop: "15px"
  },
  rating_root: {
    marginTop: "15px"
  },
  text_root: {
    marginTop: "15px"
  },
  add_picture: {
    marginTop: "15px"
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "15px",
  },
  submit: {
    marginTop: "10px",
    backgroundColor: "#c5cae9"
  },
  cancel: {
    marginTop: "10px",
    backgroundColor: "#e3f2fd"
  },
  media: {
    height: 140,
    marginTop: '20px',
   
    display: "flex",
    flexDirection: "column",
  },

}));

//Rating
const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
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
  const [hover, setHover] = useState(-1);

  const classes = useStyles();
  const theme = useTheme();
  const [fishName, setFishName] = useState([]);

  //Tile
  const [title, setTitle] = useState(props.editPopup.title);
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //Date
  const creationDate = props.editPopup.date.substring(0,10)
  const [date, setDate] = useState(creationDate);

  const handleDateChange = (event) => {
    console.log("datechange", event.target.value);
    setDate(event.target.value);
  };
 

  //Species
  const [species, setSpecies] = useState(props.editPopup.species_name);
  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  //Rating
  const [rating, setRating] = useState(props.editPopup.rating);
  const handleRatingChange = (event, value) => {
    setRating(value);
  };

  //Description
  const [description, setDescription] = useState(props.editPopup.description);
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  //Image link
  const [image, setImage] = useState(props.editPopup.image);
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const [speciesList, setSpeciesList] = useState([]);

  useEffect(
    () =>
      axios
        .get("/species")
        .then((res) => {
          // console.log(res.data);
          setSpeciesList(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        }),
    []
  );

  //OnSubmit Button makes post request to /pins, submitting the form data
  const onSubmit = (evt) => {

    const popup = {
      leafletLocation: props.editPopup.leafletLocation,
      uuid: props.editPopup.uuid,
      title: title,
      date: date,
      species_name: species,
      rating: rating,
      description: description,
      image: image,
      location: `(${props.editPopup.leafletLocation[0]}, ${props.editPopup.leafletLocation[1]})`,
    };
    props.setEditPopup(popup);
    // props.setMarkers([...props.markers, popup])
    console.log("WHAT WE'RE SENDING TO THE POST REQUEST", popup)

    //this is the exact information going to the axios edit request

    const pin = {

      title: title,
      description: description,
      date: date,
      image: image,
      rating: rating,
      species_name: species,
      // species: species,
      uuid: props.editPopup.uuid,

    }
    function assignValue(pin, markers) {
      console.log("pin", pin)
      console.log("marker", markers)
      let pinValue = pin.uuid;
      if (markers[pinValue] || markers.marker.uuid === pinValue) {
        _.assign(markers[pinValue], pin)
        console.log("_.assign(markers[uuid], pin", _.assign(markers[pinValue], pin))
      }
      else {
        console.log("UUID NOT VALID")
      };
    };

    assignValue(pin, props.markers)
    
    axios
      .put("/pins", pin)
      .then((res) => {
        console.log("EDITED")
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    props.setEdit(false);
    props.onClose();
  };

  const onCancel = () => {
    props.setEdit(false);
    props.onClose();
  };



  return (

    
    <form className={classes.marker_form} >

      <FormControl className={classes.title_root} >
        <InputLabel htmlFor="Title">Edit Your Pin</InputLabel>
        <Input
        
          name="title"
          onChange={handleTitleChange}
          id="Title"
          aria-describedby="my-helper-text"
          value={title}
        />
      </FormControl>


      <TextField
        className={classes.date_root}
        id="date"
        type="date"
        value={date}
        name="date"
        onChange={handleDateChange}
      />

      <FormControl className={classes.species}>
        <InputLabel id="demo-mutiple-name-label">Species</InputLabel>
        <Select
          labelId="demo-mutiple-name-label"
          id="demo-mutiple-name"
          value={species}
          onChange={handleSpeciesChange}
          input={<Input />}
          MenuProps={MenuProps}
          name="species_name"
        >
          {speciesList.map((fish) => (
            <MenuItem
              key={fish.id}
              value={fish.name}
              style={getStyles(fish.name, fishName, theme)}
            >
              {fish.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>


      <Rating
        className={classes.rating_root}
        name="rating"
        value={rating}
        precision={0.5}
        onChange={handleRatingChange}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />

      {rating !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>
      )}


      <TextareaAutosize
        className={classes.text_root}
        rowsMax={4}
        aria-label="maximum height"
        placeholder="Your comments"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        name="description"
        value={description}
        onChange={handleDescriptionChange}
      />
        <CardMedia
            className={classes.media}
            image={image}
            title={props.title}
          />
      <FormControl className={classes.add_picture}>
        <InputLabel htmlFor="input-with-icon-adornment">
          Add a link to your picture
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <AddAPhotoIcon />
            </InputAdornment>
          }
          name="image"
          value={image}
          onChange={handleImageChange}
        />
      </FormControl>

      <div className={classes.buttons}>
        <Button
          className={classes.submit}
          variant="contained"
          onClick={() => onSubmit()}>
          Submit
        </Button>

        <Button
          className={classes.cancel}
          variant="contained"
          onClick={() => onCancel()}>
          Cancel
      </Button>
      </div>

    </form>
  );
}
