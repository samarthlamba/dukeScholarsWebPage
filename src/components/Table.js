import React from 'react';
import results from '../output.json';
import "./App.css";
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import { MountNode } from 'semantic-ui-react';
import moment from 'moment';

const table = () => {
  let articleLink = '';

  const linkUpdate = (link) => {
    articleLink = link;
  }

  const columns = [
    {
      title: '',
      dataIndex: 'link',
      key: 'titleLinker',
      render: text => (
        <script>
          function Links() {
            linkUpdate(text)
          }
        </script>
      )
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 250,
      render: text => <a href={articleLink}>{text}</a>,  
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
      key: 'authors',
      width:200
    },
    {
      title: 'Publication Date',
      dataIndex: 'published_date',
      key: 'published_date',
      width: 200,
      sorter: (a, b) => moment(a.published_date).unix() - moment(b.published_date).unix(),
    },
   
    {
      title: 'Publication Location',
      dataIndex: 'publication_location',
      key: 'publication_location',
    },
    // {
    //   title: 'link',
    //   dataIndex: 'link',
    //   key: 'link',
    //   render: text => <a href={text}>{text}</a>
    // },
    {
      title: 'Citations',
      dataIndex: 'citations',
      key: 'citations',
    },
    {
      title: 'Mendeley Readership',
      dataIndex: 'readership',
      key: 'readership',
    },
    {
      title: 'Tweets',
      dataIndex: 'tweets',
      key: 'tweets',
    },
  ];

  return (
    <Table style={{marginRight:50, marginLeft:50}} columns={columns} dataSource={results} />
  );
}



export default table;
    


