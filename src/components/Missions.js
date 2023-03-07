import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import Badge from 'react-bootstrap/Badge';
import { fetchMissions, joinMission } from '../redux/missions/missionsSlice.js';

function Missions() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.missions.status);
  const missions = useSelector((state) => state.missions.missionstore);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  const missionHandler = (e) => {
    dispatch(joinMission(e.target.id));
  };
  return (
    <div className="px-5 pr-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>{}</th>
          </tr>
        </thead>
        <tbody>
          {
          missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="fw-bold " style={{ width: '10%' }}>{mission.mission_name}</td>
              <td style={{ width: '45%' }}>
                {mission.description}
              </td>
              <td className="text-center align-middle" style={{ width: '5%' }}>
                <Badge bg={mission.reserved ? ('info') : ('secondary')}>
                  {mission.reserved ? ('Active Member') : ('NOT A MEMBER')}
                </Badge>
              </td>
              <td className="text-center align-middle" style={{ width: '10%' }}>
                <Button
                  id={mission.mission_id}
                  variant={mission.reserved ? ('outline-danger') : ('outline-secondary')}
                  size="md"
                  onClick={missionHandler}
                >
                  {mission.reserved ? ('Leave Misson') : ('Join Misson')}
                </Button>
              </td>
            </tr>
          ))
        }

        </tbody>
      </Table>

    </div>
  );
}

export default Missions;
