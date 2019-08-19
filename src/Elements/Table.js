import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    padding: .5em;
    border: 1px solid darkmagenta;
  }

  thead {
    th {
      text-align: left;
      font-weight: normal;
      background: darkmagenta;
      color: white;
    }
  }

  tbody {
    tr {
      
      &:nth-child(odd) {
        background: #fff3f5;
      }

      td {
        font-family: "Courier New", Courier, monospace;
      }
    }
  }
`;