import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

function MyProfile() {
  const missions = useSelector((state) => state.missions.missionstore);
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
            {missions.filter((mission) => mission.reserved === true).map((mission) => (
              <ListGroup.Item key={mission.mission_id}>
                {mission.mission_name}
              </ListGroup.Item>
            ))}
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
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>

        </Col>

      </Row>
    </div>
  );
}

export default MyProfile;
