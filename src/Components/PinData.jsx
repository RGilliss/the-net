import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import url from '../steelhead.webp'
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {height: 0, paddingTop: '56.25%'}
});
export default function PinData (props) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="p" component="h4">
          <div> 25/04/2020</div>
          <div>@TRosie</div>
        </Typography>
        <Typography gutterBottom variant="h6" component="h4">
          {props.name}
        </Typography>
        <Typography gutterBottom variant="p" component="h4">
          Steelhead Trout
        </Typography>

      <CardMedia
        className={classes.media}
        image={url}
        title="Contemplative Reptile"
      />
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
        <Rating
          value={4.5}
          precision={0.5}
        />
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
  )
}

// https://i.cbc.ca/1.4388180.1518656834!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/steelhead.jpg