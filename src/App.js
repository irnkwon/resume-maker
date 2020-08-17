import React from 'react';
import './App.css';
import { Card, 
  Collapse, 
  Input, 
  DatePicker,
  Space } from 'antd';

function App() {
  const { Panel } = Collapse;
  const { RangePicker } = DatePicker;
  const { TextArea } = Input;
  return (
    <div className="App">
      <Card title="Resume Maker" bordered={true} style={{ width: 350 }}>
        <Collapse defaultActiveKey={['1', '2', '3', '4', '5']} ghost>
          <Panel header="Basic Information" key="1">
            <Input placeholder="Your Name"></Input>
          </Panel>
          <Panel header="Education" key="2">
            <Space direction="vertical">
              <Input placeholder="School"></Input>
              <Input placeholder="Location"></Input>
              <RangePicker bordered={true} />
              <TextArea placeholder="Education Description"></TextArea>
            </Space>
          </Panel>
          <Panel header="Experience" key="3">
            <Space direction="vertical">
              <Input placeholder="Company"></Input>
              <Input placeholder="Location"></Input>
              <RangePicker bordered={true} />
              <TextArea placeholder="Experience Description"></TextArea>
            </Space>
          </Panel>
          <Panel header="Projects" key="4">
            <Space direction="vertical">
              <Input placeholder="Project Name"></Input>
              <TextArea placeholder="Project Description"></TextArea>
            </Space>
          </Panel>
          <Panel header="Contact" key="5">
            <Space direction="vertical" size={12}>
              <Input placeholder="Phone Number"></Input>
              <Input placeholder="Email Address"></Input>
              <Input placeholder="Portfolio Address"></Input>
              <Input placeholder="Github Address"></Input>
              <Input placeholder="LinkedIn Address"></Input>
            </Space>
          </Panel>
        </Collapse>
      </Card>
    </div>
  );
}

export default App;
