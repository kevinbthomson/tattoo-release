import React from 'react';

const ClientRow = ({ client }) => (
  <tr className="clientRow">
    <td>{client.first}</td>
    <td>{client.last}</td>
    <td>{client.dob}</td>
    <td>{client.city}</td>
    <td>{client.state}</td>
    <td>{client.zip}</td>
    <td>{client.phone}</td>
  </tr>
);

export default ClientRow;