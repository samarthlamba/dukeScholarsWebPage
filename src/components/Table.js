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
  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park, New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 2 Lake Park, London No. 2 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park, Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
return (
  (<Table columns={columns} dataSource={results} />)
  
)
}



export default table;
    


