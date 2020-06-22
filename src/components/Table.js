import React from 'react';
import results from '../output.json';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "./App.css";
import { MDBDataTable } from 'mdbreact';

const table = () => {
  const data = {
    columns: [
      {
        label: 'Title',
        field: 'title',
        sort: 'asc',
        width: 600,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
      {
        label: 'Authors',
        field: 'authors',
        sort: 'asc',
        width: 270,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
      {
        label: 'published_date',
        field: 'doi',
        sort: 'asc',
        width: 200,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
      {
        label: 'doi',
        field: 'doi',
        sort: 'asc',
        width: 200,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
     
      {
        label: 'publication_location',
        field: 'publication_location',
        sort: 'asc',
        width: 200,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },
      {
        label: 'link',
        field: 'link',
        sort: 'asc',
        width: 200,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Name',
        }
      },{
        label: 'citations',
        field: 'citations',
        sort: 'asc',
        width: 200
      },
      {
        label: 'readership',
        field: 'readership',
        sort: 'asc',
        width: 200
      },
      {
        label: 'tweets',
        field: 'tweets',
        sort: 'asc',
        width: 200
      }
    ],
    rows: results
  };

  return (
    <MDBDataTable
      scrollY
      maxHeight="40vh"
      striped
      bordered
      small
      data={data}
    />
  );
}




export default table;