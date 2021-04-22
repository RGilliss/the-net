import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 225,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

//Displays inner content of the regulations circles
export default function RegulationDisplay(props) {
  const classes = useStyles();

  return (
    <>
      <Card
        className={classes.root}
        style={{
          boxShadow: "none"
        }} 
        >
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.water_body}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <>
              {props.class_water ? <div>{"\uD83D\uDCB5"}{"Classified Waters"}</div> : null}
              {props.tributary ? <div>{"\u5DDD"}{"Regulation includes tributaries"}</div> : null}
              {props.stocked ? <div>{"\uD83D\uDC1F"}{"Stocked"}</div> : null}
              {props.accessible ? <div>{"\u267F"}{"Accessible fishing"}</div> : null}
            </>
          </Typography>
          <Typography variant="body2" component="p">
            {`${props.regulation}`}
            <br />
            {/* <>{props.date_range ? <div>{props.date_range}</div> : null}</> */}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            href="https://bit.ly/2QmjPFZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
