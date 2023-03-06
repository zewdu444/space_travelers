import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Missions() {
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
          <tr>
            <td className="fw-bold">Thaicom</td>
            <td className="w-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In quibusdam sed exercitationem consequuntur quaerat.
              Facilis laudantium ut minima quaerat soluta, aliquid mollitia
              voluptas at blanditiis vero architecto assumenda aut incidunt?
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
          <tr>
            <td className="fw-bold">Telstar</td>
            <td className="w-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              In quibusdam sed exercitationem consequuntur quaerat.
              Facilis laudantium ut minima quaerat soluta, aliquid mollitia
              voluptas at blanditiis vero architecto assumenda aut incidunt?
            </td>
            <td className="text-center align-middle">
              <Button variant="success" size="sm" disabled>
                NOT A MEMBER
              </Button>
            </td>
            <td className="text-center align-middle">
              <Button variant="outline-danger align-middle" size="md">
                Join Mission
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>

    </div>
  );
}

export default Missions;
