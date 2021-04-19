import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import StarsIcon from "@material-ui/icons/Stars";
import { dateParser } from "../../../helpers/DateHelper";
import axios from "axios";
import { useState, useContext } from "react";
import UserContext from "../../../UserContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0
  },
  date: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  fav: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    marginTop: "10px"
  },
  rating: {
    display: "flex",
    justifyContent: "center",
  },

  media: {
    height: 0,
    paddingTop: "56.25%",
    display: "flex",
    flexDirection: "column",
    marginTop: "10px"
  },
  species: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px"
  }, 
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  edit: {
    display: "flex",
    flexDirection: "row",
    backgroundColor:"#a7ffeb",
    width: "40%"
    
  },
  delete: {
    display: "flex",
    flexDirection: "row",
    backgroundColor:"#ffccbc",
    width: "40%"
  }

});

//Displays the inner content of each marker popup
export default function PopupDisplay(props) {
  const user = useContext(UserContext);

  const [selected, setSelected] = useState([]);

  const classes = useStyles({});

  console.log("POPUPDISPLAY props", props);

  const setFavourite = () => {
    const postProps = { user: user.id, uuid: props.uuid, pin_id: props.pin_id };
    axios
      .post("/favourites", postProps)
      .then((res) => {
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteFavourite = () => {
    axios
      .delete("/favourites", { data: { user: user.id, uuid: props.uuid } })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const favouriteToggle = () => {
    if (selected) {
      setFavourite();
    }
    if (!selected) {
      deleteFavourite();
    }
  };

  return (
    
      <Card className={classes.root}>
        <CardActionArea >
          <CardContent>

              <ToggleButton
                className={classes.fav}
                style={{
                  backgroundColor: "white",
                  border: "none"
              }}
                size="small"
                value="fav"
                aria-label="fav"
                selected={selected}
                onChange={() => {
                  favouriteToggle();
                  setSelected(!selected);
                }}
              >
                <StarsIcon/>
              </ToggleButton>
           

            <Typography className={classes.date}
              gutterBottom
              variant="body2"
              component="h6"
            >
              {dateParser(props.date)}
            </Typography>

            <Typography
              className={classes.title}
              gutterBottom
              variant="h6"
              component="h4"
            >
              {props.title}
            </Typography>

            <Rating
              className={classes.rating}
              value={props.rating}
              precision={0.5}
              disabled={true}
            />

            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.title}
            />

            <Typography
              className={classes.species}
              gutterBottom
              variant="p"
              component="h4"
            
            >
              Species: {props.species_name}
            </Typography>

            <Typography
            className={classes.text}
            variant="body2" 
            color="textSecondary" 
            component="p"
            >
              {props.description}
            </Typography>

          </CardContent>


        </CardActionArea>

        <CardActions className={classes.buttons}>
          <Button 
          className={classes.edit}
          variant="contained" 
          onClick={props.onEdit}
          >
            Edit
          </Button>

          <Button
          className={classes.delete}
            variant="contained"
            onClick={props.onDelete}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
   
  );
}
