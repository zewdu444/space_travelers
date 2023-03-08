import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { PropTypes } from 'prop-types';
import { fetchRockets, reserveRocket } from '../redux/rockets/RocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.rockets.status);
  const rockets = useSelector((state) => state.rockets.rocketList);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  return (
    <>
      {rockets.map((rocket) => (
        <ul className="container-fluid mb-4" key={rocket.id}>
          <li className="rocket row">
            <img
              src={rocket.flickr_images}
              alt="rocket"
              className="col-lg-3 col-md-5 col-12"
            />
            <div className="rocket-details col-lg-9 col-md-7 col-12">
              <h2>{rocket.name}</h2>
              <p>
                <Badge bg={rocket.reserved ? ('info') : ('secondary')}>
                  {rocket.reserved ? ('Reserved') : ('')}
                </Badge>
                {`${rocket.description}`}
              </p>
              <Button
                type="button"
                variant={rocket.reserved ? ('outline-secondary') : ('btn btn-primary')}
                size="md"
                onClick={() => {
                  dispatch(reserveRocket(rocket.id));
                }}
              >
                {rocket.reserved ? ('Cancel Reservation') : ('Reserve Rocket')}
              </Button>
            </div>
          </li>
        </ul>
      ))}
    </>
  );
}
Rockets.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};
export default Rockets;
