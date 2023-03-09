import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missions.missionstore);
  const rockets = useSelector((state) => state.rockets.rocketList);

  return (
    <div className="px-2 pr-2">
      <Row>
        <Col
          sm={12}
          lg={6}
          md={6}
          className="ps-lg-5"
        >
          <h2>My Missions</h2>
          <ListGroup>
            {missions.filter((mission) => mission.reserved === true).length > 0 ? (
              missions
                .filter((mission) => mission.reserved === true)
                .map((mission) => (
                  <ListGroup.Item key={mission.mission_id}>
                    {mission.mission_name}
                  </ListGroup.Item>
                ))
            ) : (
              <ListGroup.Item>No missions have been reserved.</ListGroup.Item>
            )}
          </ListGroup>
        </Col>
        <Col
          sm={12}
          lg={6}
          md={6}
          className="pe-lg-5"
        >
          <h2>My Rockets</h2>
          <ListGroup>
            {rockets.filter((rocket) => rocket.reserved === true).length > 0 ? (
              rockets
                .filter((rocket) => rocket.reserved === true)
                .map((rocket) => (
                  <ListGroup.Item key={rocket.id}>
                    {rocket.name}
                  </ListGroup.Item>
                ))
            ) : (
              <ListGroup.Item>No rockets have been reserved.</ListGroup.Item>
            )}
          </ListGroup>
        </Col>

      </Row>
    </div>
  );
}

export default MyProfile;
