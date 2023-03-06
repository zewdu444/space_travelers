import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.missions.status);
  const missions = useSelector((state) => state.missions.missionstore);
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);
  return (
    <div className="px-4 pr-4">
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
              <td className="fw-bold">{mission.mission_name}</td>
              <td className="w-50">
                {mission.description}
              </td>
              <td className="text-center align-middle">
                <Button variant="secondary" size="sm" disabled>
                  NOT A MEMBER
                </Button>
              </td>
              <td className="text-center align-middle">
                <Button variant="outline-secondary" size="md">
                  Join Mission
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
