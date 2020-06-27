import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NewsTab from './NewsTab';
import Table from './Table';
import "./App.css";
import news from '../api/news';

class App extends React.Component{
  state = { articles: [] }
  
  async componentDidMount(){
    const response = await news.get('/v2/everything', {
      params: {
        q: '"duke" machine learning',
        language: 'en',
        sortBy: 'relevancy',
        pageSize: 50
      }
    })

    this.setState({ articles: response.data.articles })
  }

  render(){
    return (
      <div class = "body">
        
      <h1 class="ui dividing header"> Duke@Scholars </h1>
        <Tabs defaultIndex={0}>
          <TabList>
            <Tab>News</Tab>
            <Tab>Research</Tab>
          </TabList>
          <TabPanel >
          <style>{'body { background-color: #FFFFFF; }'}</style>
          <NewsTab articles={this.state.articles} />
          </TabPanel>
          
          <TabPanel>
            <Table />
          </TabPanel>
        </Tabs>
        
      </div>
    );
  }
};

export default App;