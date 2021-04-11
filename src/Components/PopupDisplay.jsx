import useAxios from 'axios-hooks'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {height: 0, paddingTop: '56.25%'}
});
export default function PinData (props) {
  const classes = useStyles();

  const [{ data, loading, error }] = useAxios(
    'https://angler-reg-api.herokuapp.com/pins'
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const returnData = data

  return (
    <>
    {returnData.pins.map(pin =>
    <Card className={classes.root}>
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="p" component="h4">
          <div>{pin.date}</div>
          <div>{pin.user_id}</div>
        </Typography>
        <Typography gutterBottom variant="h6" component="h4">
          {pin.title}
        </Typography>
        <Typography gutterBottom variant="p" component="h4">
          {pin.species_id}
        </Typography>

      <CardMedia
        className={classes.media}
        image={pin.image}
        title={pin.title}
      />
        <Typography variant="body2" color="textSecondary" component="p">
          {pin.description}
        </Typography>
        <Rating
          value={pin.rating}
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
    )}
    </>
  )
}