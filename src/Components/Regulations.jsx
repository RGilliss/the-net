import useAxios from 'axios-hooks'

import {
  Popup,
  Circle,
  Marker
} from "react-leaflet";

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Regulations() {

  const classes = useStyles();
  const startPosition = [49.7303, -125.91];
  
  
  const [{ data, loading, error }] = useAxios(
    'https://angler-reg-api.herokuapp.com/regulations'
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  
 

const returnData = data

console.log("returnData:", returnData)
console.log("data", data)

  return (
    <>
    {returnData.map(regulation => 
    <>
    <Popup>
      <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
      {regulation.water_body}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
        {`${regulation.class_water} - ${regulation.tributary} - ${regulation.stocked} - ${regulation.accessible}`}
        </Typography>
        <Typography variant="body2" component="p">
        {`${regulation.regulation}`}
          <br />
          {`${regulation.date_range}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
     </Card>
    </Popup>
      <Circle center={[regulation.location.x, regulation.location.y]} radius={2000} />
    </>
    )}
  </>
  )
}

