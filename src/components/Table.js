import React from 'react';
import results from '../output.json';
import "./App.css";
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { Table } from 'antd';
import { MountNode } from 'semantic-ui-react';
import moment from 'moment';





const table = () => {

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: text => <a>{text}</a>,  
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
      key: 'authors',
    },
    {
      title: 'published_date',
      dataIndex: 'published_date',
      key: 'published_date',
      sorter: (a, b) => moment(a.published_date).unix() - moment(b.published_date).unix(),
    },
   
    {
      title: 'publication_location',
      dataIndex: 'publication_location',
      key: 'publication_location',
    },
    {
      title: 'link',
      dataIndex: 'link',
      key: 'link',
      render: text => <a href={text}>{text}</a>
    },{
      title: 'citations',
      dataIndex: 'citations',
      key: 'citations',
    },
    {
      title: 'readership',
      dataIndex: 'readership',
      key: 'readership',
    },
    {
      title: 'tweets',
      dataIndex: 'tweets',
      key: 'tweets',
    },
  ];
 
return (
  (<Table columns={columns} dataSource={results} />)
  
)
}



export default table;
    


