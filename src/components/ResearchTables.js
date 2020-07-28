import React from 'react';
import { Tabs, Layout} from 'antd';
import Table from './Table';
import machine_learning from '../machine_learning.json';
import deep_learning from '../deep_learning.json';
import neural_networks from '../neural_networks.json';

const { TabPane } = Tabs;
export default class ResearchTables extends React.Component{


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
            <Table data={machine_learning} />
          </TabPane>
          <TabPane tab={<span>Deep Learning</span>} key="2">
            <Table data={deep_learning} />
          </TabPane>
          <TabPane tab={<span>Neural Networks</span>} key="3">
            <Table data={neural_networks} />
          </TabPane>
        </Tabs>
      </Layout>
    );
  };
};