import React from 'react';
import results from '../output.json';
import "./App.css";
import styled from 'styled-components'
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBDataTable
} from 'mdbreact';
import {
  useTable,
  useResizeColumns,
  useFlexLayout,
  useRowSelect,
} from 'react-table'

const Styles = styled.div`
  padding: 1rem;

  .table {
    ${''}
    display: block;
    ${''}
    overflow: auto;

    }
  
`


const table = () => {
  const data_collspan = {
    columns: [
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 170,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
      {
        label: 'Authors',
        field: 'authors',
        width: 150,
        sort: 'asc',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
      {
        label: 'published_date',
        field: 'doi',
        width: 230,
        sort: 'asc', 
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
      {
        label: 'doi',
        field: 'doi',
        sort: 'asc',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
     
      {
        label: 'publication_location',
        field: 'publication_location',
        sort: 'asc',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
      {
        label: 'link',
        field: 'link',
        sort: 'asc',
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },{
        label: 'citations',
        field: 'citations',
        sort: 'asc'
      },
      {
        label: 'readership',
        field: 'readership',
        sort: 'asc'
      },
      {
        label: 'tweets',
        field: 'tweets',
        sort: 'asc'
      }
    ],
    rows: results
  };

  

  return (
    <Styles><table class="ui basic table"> 
    
          <MDBDataTable
    scrollY
    maxHeight="40vh"
    MaxWidth = '1px'
    striped
    bordered
    small
    data={data_collspan}
    />
     </table> </Styles>
    
  );
}




export default table;