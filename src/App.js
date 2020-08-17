import React from 'react';
import './App.css';
import { Card, 
  Collapse, 
  Input, 
  DatePicker,
  Space,
  Layout,
  Typography } from 'antd';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  render() {

    const { Panel } = Collapse;
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const { Sider, Content, Footer } = Layout;
    const { Title } = Typography;

    return (
      <Layout>
        <Sider>
          <Card title="Resume Maker" bordered={true} style={{ width: 350 }}>
            <Collapse defaultActiveKey={['1', '2', '3', '4', '5']} ghost>
              <Panel header="Basic Information" key="1">
                <Input placeholder="Your Name" onChange={this.handleChange}></Input>
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
        </Sider>
        <Layout className="main-content">
          <Content>
            <Title level={2}>{this.state.name}</Title>
          </Content>
          <Footer>
            2020 © designed and developed by Irene Kwon
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
