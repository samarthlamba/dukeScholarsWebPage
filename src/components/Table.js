import React from 'react';
import results from '../output.json';
import "./App.css";
import styled from 'styled-components'
import ReactDOM from 'react-dom';
import { MountNode } from 'semantic-ui-react';
import moment from 'moment';
import { Table, Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';




class table extends React.Component {
  state = {
    searchText: '',
    searchedColumn: '',
  };  
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  };
  fixColumn = columns => {
    return columns.filter(
      column => column.key != "titleLinker"
    );
  };
  render() {
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
      ),
      visible: false
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      width: 250,
      render: text => <a href={articleLink}>{text}</a>,  
      ...this.getColumnSearchProps('title'),  
    },
    {
      title: 'Authors',
      dataIndex: 'authors',
      key: 'authors',
      ...this.getColumnSearchProps('authors'),  
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
      ...this.getColumnSearchProps('publication_location'),  
    },
    {
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
  (<Table columns={columns} dataSource={results}/>)
  
)
}
}


export default table;
    


