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
import useAxios from "axios-hooks";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  marker_form: {
    display: "flex",
    flexDirection: "column",
  },
  rating_root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
  add_picture: {
    margin: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
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

  // //name
  // const [name, setName] = useState("");
  // const handleNameChange = (event) => {
  //   setName(event.target.value);
  // };

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

  console.log(formatDate("Sun May 11,2014"));

  //Species
  const [species, setSpecies] = useState("");
  const handleSpeciesChange = (event) => {
    setSpecies(event.target.value);
  };

  //Rating
  const [rate, setRate] = useState("");
  const handleRateChange = (event, value) => {
    console.log("value", value);
    setRate(value);
  };

  //textarea
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  //Picture link
  const [link, setLink] = useState("");
  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const [speciesList, setSpeciesList] = useState([]);

  //OnSubmit Button
  const onSubmit = (evt) => {
    // console.log(props.marker);

    let pinForm = {
      title: title,
      // name: name,
      date: date,
      species: species,
      rate: rate,
      text: text,
      link: link,
      location: `(${props.location.lat}, ${props.location.lng})`,
    };
    console.log("pinForm", pinForm);
    props.setPopups({ ...pinForm, pinForm });

    axios
      .post("/pins", pinForm)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    props.onClose();
  };
  useEffect(
    () =>
      axios
        .get("/species")
        .then((res) => {
          console.log(res.data);
          setSpeciesList(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
        }),
    []
  );
  // species in selector
  // const [{ data, loading, error }] = useAxios("/species");
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error!</p>;
  // console.log("data_species", data.species);

  // const returnData = data.species;

  return (
    <form className={classes.marker_form}>
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

      {/* <FormControl>
        <InputLabel htmlFor="Name">Your Name</InputLabel>
        <Input
          name="name"
          onChange={handleNameChange}
          id="Name"
          aria-describedby="my-helper-text"
          value={name}
        />
      </FormControl> */}

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
          {speciesList.map((fish) => (
            <MenuItem
              key={fish.id}
              value={fish.id}
              style={getStyles(fish.name, fishName, theme)}
            >
              {fish.name}
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

        {rate !== null && (
          <Box ml={2}>{labels[hover !== -1 ? hover : rate]}</Box>
        )}
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
        <InputLabel htmlFor="input-with-icon-adornment">
          Add a link of your picture
        </InputLabel>
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
  );
}
