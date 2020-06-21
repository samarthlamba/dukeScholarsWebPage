import React from 'react';
import NewsTab from './NewsTab';
import ResearchTab from './ResearchTab';

class App extends React.Component{
  state = { selectedMenuIndex: 0 }

  onMenuSelect = (index) => {
    this.setState({ selectedMenuIndex: index });
  }

  render(){
    return (
      <div>
        <NewsTab />
        <ResearchTab />
      </div>
    );
  }
};

export default App;