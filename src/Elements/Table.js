import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  td,
  th {
    padding: .5em;
  }

  thead {
    th {
      text-align: left;
      font-weight: normal;
      background: darkmagenta;
      color: white;
    }
  }
  
  tfoot {
    td {
      padding: 0;
      text-align: left;
      font-weight: normal;
      background: darkmagenta;
      color: white;
    }
  }

  tbody {
    tr {
      // border-bottom: 1px solid darkmagenta;
      
      &:nth-child(odd) {
        background: #fff3f5;
      }

      td {
        white-space: no-wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: "Courier New", Courier, monospace;
      }
    }
  }
`;