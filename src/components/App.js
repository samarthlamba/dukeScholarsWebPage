import React from 'react';
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
        <MenuItem />
        <NavigationBar />
        <ResearchTab />
        <table class="ui striped table"><Table /></table>
        
      </div>
    );
  }
};

export default App;