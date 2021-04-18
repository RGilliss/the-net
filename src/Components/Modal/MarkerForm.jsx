import { useEffect, useState } from "react";
import FormControl from "@material-ui/core/FormControl";
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
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { v4 as uuidv4 } from "uuid";


//CSS FORM
const useStyles = makeStyles((theme) => ({
  marker_form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title_root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5px"
  },
  date_root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5px"
  },
  species: {
    display: "flex",
    flexDirection: "column",

  },
  rating_root: {
    width: 200,
    display: "flex",
    flexDirection: "column",
    marginTop: "15px"
  },
  text_root: {
    display: "flex",
    flexDirection: "column",
    marginTop: "5px"
  },
  add_picture: {
    marginTop: "10px"
  },
  button: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
  },
  button_in: {
    backgroundColor: "#b2dfdb"
  }

}));

///END OF CSS

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
  // const [value, setValue] = useState(2);
  const [hover, setHover] = useState(-1);

  const classes = useStyles();
  const theme = useTheme();
  const [fishName, setFishName] = useState([]);

  //Tile
  const [title, setTitle] = useState("");
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //Date
  const CurrentDate = new Date();
  const [date, setDate] = useState(formatDate(CurrentDate));

  const handleDateChange = (event) => {
    console.log("datechange", event.target.value);
    setDate(event.target.value);
  };

  //Formatting the date to work with date of today in our form
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  //Species
  const [species, setSpecies] = useState("");
  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  //Rating
  const [rating, setRating] = useState("");
  const handleRatingChange = (event, value) => {
    console.log("value", value);
    setRating(value);
  };

  //Description
  const [description, setDescription] = useState("");
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  //Image link
  
  const [image, setImage] = useState('');
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
    const uuid = uuidv4();
    let currentLocation = [...props.location];
    currentLocation = currentLocation.pop();
    const marker = {
      leafletLocation: currentLocation,
      uuid: uuid,
      title: title,
      date: date,
      species: species,
      rating: rating,
      description: description,
      image: image,
      location: `(${currentLocation.lat}, ${currentLocation.lng})`,
    };
    props.setMarkers({ ...props.markers, [marker.uuid]: marker });

    axios
      .post("/pins", marker)
      .then((res) => {
        console.log("RES", res);

      })
      .catch((err) => {
        console.log(err);
      });

    props.onClose();
  };

  return (
    <form className={classes.marker_form}>

      <div className={classes.title_root}>
        <FormControl>
          <InputLabel htmlFor="Title">Your Title</InputLabel>
          <Input
            name="title"
            onChange={handleTitleChange}
            id="Title"
            aria-describedby="my-helper-text"
            value={title}
          />
        </FormControl>
      </div>

      <div className={classes.date_root}>
        <TextField
          id="date"
          type="date"
          value={date}
          name="date"
          onChange={handleDateChange}
        />
      </div>


      <div className={classes.species}>
        <FormControl>
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
      </div>

      <div className={classes.rating_root}>
        <Typography variant="h9" component="legend">Rate your spot</Typography>
        <Rating
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

      </div>

      <div className={classes.text_root}>
        <TextareaAutosize
          rowsMax={4}
          aria-label="maximum height"
          placeholder="Your comments"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <div className={classes.add_picture}>
        <FormControl>
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
      </div>

      <div className={classes.button}>
        <Button className={classes.button_in} variant="contained" size="medium" onClick={() => onSubmit()}>
          SUBMIT
      </Button>
      </div>
    </form>
  );
}
