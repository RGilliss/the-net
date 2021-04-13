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
import { dateParser } from "./helpers/DateHelper";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: { height: 0, paddingTop: "56.25%" },
  fav: {
    color: "#ffb74d",
  },
});

//Displays the inner content of each marker popup
export default function PopupDisplay(props) {
  const [selected, setSelected] = useState([]);
  const classes = useStyles({});

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                backgroundColor: "#61dafb",
                paddingLeft: "10px",
              }}
            >
              <Typography
                gutterBottom
                variant="body2"
                component="h6"
                style={{ alignSelf: "flex-end" }}
              >
                {dateParser(props.date)}
              </Typography>
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
              gutterBottom
              variant="h6"
              component="h4"
              style={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "flex-end",
              }}
            >
              {props.title}
            </Typography>
            <Rating
              value={props.rating}
              precision={0.5}
              disabled={true}
              style={{ display: "flex", justifyContent: "center" }}
            />
            <Typography
              gutterBottom
              variant="p"
              component="h4"
              style={{ display: "flex", justifyContent: "center" }}
            >
              Found by {props.name}
            </Typography>
            <CardMedia
              className={classes.media}
              image={props.image}
              title={props.title}
            />
            <Typography
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
          <Button variant="contained" color="primary">
            Share
          </Button>
          <Button variant="contained" color="primary">
            Regulations
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
