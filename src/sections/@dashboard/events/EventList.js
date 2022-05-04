import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import ShopProductCard from './EventCard';

// ----------------------------------------------------------------------

EventList.propTypes = {
  events: PropTypes.array.isRequired
};

export default function EventList({ events  ,deleteProduct}) {

  return (
    <Grid container spacing={3} >
      {events.map((event) => (
        <Grid key={event._id} item xs={12} sm={6} md={3}>

        </Grid>
      ))}
    </Grid>
  );
}
