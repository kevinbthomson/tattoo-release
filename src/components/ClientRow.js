import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../Elements';

const ClientRow = ({ client, deleteClient }) => {
  return (
    <tr className="clientRow">
      <td>{client.first}</td>
      <td>{client.last}</td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
      <td>
        <Button className="float-right">
          <Link to={ `clients/client/${client.id}` }>Edit</Link>
        </Button>
      </td>
    </tr>
  );
};

export default ClientRow;