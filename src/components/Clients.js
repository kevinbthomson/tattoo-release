import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from '../Elements';
import ClientRow from './ClientRow';

const Clients = ({ clients, addClient, editClient, deleteClient }) => (
  <div className="container table-container">
    <Table>
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Phone</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        { clients &&
          clients.map(client => (
          <ClientRow client={ client } editClient={ editClient } key={ client.id } />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="5">
            <Button className="float-right">
              <Link to="/clients/client/:new">+ Add Client</Link>
            </Button>
          </td>
        </tr>
      </tfoot>
    </Table>
    
  </div>
);

export default Clients;