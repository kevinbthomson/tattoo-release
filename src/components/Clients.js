import React from 'react';
import { Table } from '../Elements';
import ClientRow from './ClientRow';

const Clients = ({ clients }) => (
  <div className="container">
    <Table>
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Date of Birth</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        { clients &&
          clients.map(client => (
          <ClientRow client={ client } key={ client.phone } />
        ))}
      </tbody>
    </Table>
  </div>
);

export default Clients;