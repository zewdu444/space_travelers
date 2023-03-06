import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.missions.status);
  const missions = useSelector((state) => state.missions.missionstore);
  // const [join] = useState('Join Misson');
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  const missionHandler = (e) => {
    dispatch(joinMission(e.target.id));
  };
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
                <Button variant={mission.reserved ? ('success') : ('secondary')} size="sm" disabled>
                  {mission.reserved ? ('Active Member') : ('NOT A MEMBER')}
                </Button>
              </td>
              <td className="text-center align-middle">
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
