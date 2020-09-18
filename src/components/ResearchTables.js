import React from 'react';
import { Tabs, Layout} from 'antd';
import Table from './Table';
import axios from 'axios';

const { TabPane } = Tabs;
export default class ResearchTables extends React.Component{
  state = {ml: [], dl: [], nn: []};

  getArticle = () => {
    axios.get('http://localhost:8080/machine_learning')
      .then((response) => {
        console.log('grabbing data from server');
        this.setState({ ml: response.data});
      })
      .catch(() => {
        console.log('Error while trying to reach server.');
      });

    axios.get('http://localhost:8080/deep_learning')
      .then((response) => {
        console.log('grabbing data from server');
        this.setState({ dl: response.data});
      })
      .catch(() => {
        console.log('Error while trying to reach server.');
      });
    
    axios.get('http://localhost:8080/neural_networks')
      .then((response) => {
        console.log('grabbing data from server');
        this.setState({ nn: response.data});
      })
      .catch(() => {
        console.log('Error while trying to reach server.');
      });
  }

  componentDidMount(){
    this.getArticle();
  }

  render(){

    return(
      <Layout>
        <Tabs tabBarStyle={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 50
        }} size="default" type="card" centered={true} defaultActiveKey="1">
          <TabPane tab={<span>Machine Learning</span>} key="1">
            <Table data={this.state.ml} />
          </TabPane>
          <TabPane tab={<span>Deep Learning</span>} key="2">
            <Table data={this.state.dl} />
          </TabPane>
          <TabPane tab={<span>Neural Networks</span>} key="3">
            <Table data={this.state.nn} />
          </TabPane>
        </Tabs>
      </Layout>
    );
  };
};