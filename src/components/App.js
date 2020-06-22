import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NewsTab from './NewsTab';
import ResearchTab from './ResearchTab';
import MenuItem from './MenuItem';
import NavigationBar from './NavigationBar';
import SearchBar from './SearchBar';
import Table from './Table';
import "./App.css";
import results from '../output.json';

class App extends React.Component{
  state = { selectedMenuIndex: 0 }
  
  onMenuSelect = (index) => {
    this.setState({ selectedMenuIndex: index });
  }

  tableReady = table => {
    console.log(table);
  }

  

  render(){
    return (
      <div>
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>News</Tab>
            <Tab>Research</Tab>
          </TabList>
          <TabPanel>NEWS CONTENT</TabPanel>
          <TabPanel>
            <Table />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
};

export default App;