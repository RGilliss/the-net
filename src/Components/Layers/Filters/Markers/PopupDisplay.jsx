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
import { useState } from "react";
import { dateParser } from "../../../helpers/DateHelper";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "flex",
    flexDirection: "column"
  },
  date: {
    display: "flex",
    flexDirection: "column"
  },
  fav: {
    display: "flex",
    flexDirection: "column"
  },
  title: {
    display: "flex",
    flexDirection: "column",
  },
  rating: {
    display: "flex",
    justifyContent: "center"
  },
  media: {
    height: 0, paddingTop: "56.25%",
    display: "flex",
    flexDirection: "column",
  },
  species: {
    display: "flex",
    flexDirection: "column",
  },


});

//Displays the inner content of each marker popup
export default function PopupDisplay(props) {
  const [selected, setSelected] = useState([]);
  const classes = useStyles({});
  console.log("POPUPDISPLAY props", props);


  // const onEditClick = () => {};

  const setFavourite = () => {
    // console.log("props.user_id:", { userPropsId: props.user_id });
    // console.log("props from PopUpDisplay inside set Favourite:", props);
    const user_id = { user_id: props.user_id };
    axios
      .post("/favourites", user_id)
      .then((res) => {
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>

            <Typography className={classes.date}
              gutterBottom
              variant="body2"
              component="h6"
            >
              {dateParser(props.date)}
            </Typography>

            <div class="fav-icon-wrapper" onClick={setFavourite}>
              <ToggleButton
                className={classes.fav}
                size="small"
                value="fav"
                aria-label="fav"
                selected={selected}
                onChange={() => {
                  setSelected(!selected);
                }}
              >
                <StarsIcon />
              </ToggleButton>
            </div>

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
            {/* <Typography
              gutterBottom
              variant="p"
              component="h4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Found by {props.name}
            </Typography> */}

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
              style={{ display: "flex", justifyContent: "center" }}
            >
              Species: {props.species}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button variant="contained" color="primary" onClick={props.onEdit}>
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={props.onDelete}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
