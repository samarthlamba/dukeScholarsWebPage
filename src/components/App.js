import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NewsTab from './NewsTab';
import ResearchTab from './ResearchTab';
import "./App.css";
import news from '../api/news';

class App extends React.Component{
  state = { articles: [] }
  
  async componentDidMount(){
    const response = await news.get('/v2/everything', {
      params: {
        q: 'machine learning',
        language: 'en',
        sortBy: 'relevancy',
        pageSize: 10
      }
    })

    this.setState({ articles: response.data.articles })
  }

  tableReady = table => {
    console.log(table);
  }

  render(){
    return (
      <div className="ui container" style={{marginTop: '20px' }}>
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>News</Tab>
            <Tab>Research</Tab>
          </TabList>
          <TabPanel>
            <NewsTab articles={this.state.articles} />
          </TabPanel>
          <TabPanel>
            <ResearchTab />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
};

export default App;