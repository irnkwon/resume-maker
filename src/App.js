import React from 'react';
import './App.css';
import { Card, 
  Collapse, 
  Input, 
  DatePicker,
  Space,
  Layout,
  Typography,
  Select
} from 'antd';

import {
  PhoneFilled,
  MailFilled,
  CodeFilled,
  GithubFilled,
  LinkedinFilled
} from '@ant-design/icons';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // Basic Information
      name: "Irene Kwon",

      // Contact
      phone: "123-456-7890",
      email: "irene.haeryun.kwon@gmail.com",
      portfolio: "irnkwon.github.io",
      github: "github.com/irnkwon",
      linkedin: "linkedin.com/in/irene-kwon"
    }
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  render() {

    const { Panel } = Collapse;
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const { Sider, Content, Footer } = Layout;
    const { Title, Paragraph } = Typography;
    const { Option } = Select;
    const selectBefore = (
      <Select defaultValue="http://" className="select-before">
        <Option value="http://">http://</Option>
        <Option value="https://">https://</Option>
      </Select>
    );

    return (
      <Layout className="app-container">
        <Sider width={350} theme={"light"}>
          <Card title="Resume Maker" bordered={false}>
            <Collapse defaultActiveKey={['1', '2', '3', '4', '5']} ghost>
              <Panel header="Basic Information" key="1">
                <Input name="name" placeholder="Your Name" onChange={this.handleChange}></Input>
              </Panel>
              <Panel header="Contact" key="2">
                <Space direction="vertical" size={12}>
                  <Input name="phone" placeholder="Phone Number" onChange={this.handleChange}></Input>
                  <Input name="email" placeholder="Email Address" onChange={this.handleChange}></Input>
                  <Input 
                    name="portfolio" 
                    placeholder="Portfolio Address" 
                    addonBefore={selectBefore} 
                    onChange={this.handleChange}
                  ></Input>
                  <Input 
                    name="github" 
                    placeholder="Github Address" 
                    addonBefore={selectBefore} 
                    onChange={this.handleChange}
                  ></Input>
                  <Input 
                    name="linkedin" 
                    placeholder="LinkedIn Address" 
                    addonBefore={selectBefore} 
                    onChange={this.handleChange}
                  ></Input>
                </Space>
              </Panel>
              <Panel header="Education" key="3">
                <Space direction="vertical">
                  <Input name="school" placeholder="School" onChange={this.handleChange}></Input>
                  <Input name="schoolLocation" placeholder="Location" onChange={this.handleChange}></Input>
                  <RangePicker bordered={true} />
                  <TextArea placeholder="Education Description"></TextArea>
                </Space>
              </Panel>
              <Panel header="Experience" key="4">
                <Space direction="vertical">
                  <Input name="company" placeholder="Company" onChange={this.handleChange}></Input>
                  <Input name="companyLocation" placeholder="Location" onChange={this.handleChange}></Input>
                  <RangePicker bordered={true} />
                  <TextArea placeholder="Experience Description"></TextArea>
                </Space>
              </Panel>
              <Panel header="Projects" key="5">
                <Space direction="vertical">
                  <Input placeholder="Project Name"></Input>
                  <TextArea placeholder="Project Description"></TextArea>
                </Space>
              </Panel>
            </Collapse>
          </Card>
        </Sider>
        <Layout className="main-content">
          <Content>
            <Title level={1}>{this.state.name}</Title>
            <Paragraph><PhoneFilled /> {this.state.phone}</Paragraph>
            <Paragraph><a href={"mailto:" + this.state.email}><MailFilled /> {this.state.email}</a></Paragraph>
            <Paragraph><a href={"http://" + this.state.portfolio} target="_blank" rel="noopener noreferrer">
              <CodeFilled /> {this.state.portfolio}</a></Paragraph>
            <Paragraph><a href={"http://" + this.state.github} target="_blank" rel="noopener noreferrer">
              <GithubFilled /> {this.state.github}</a></Paragraph>
            <Paragraph><a href={"http://" + this.state.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinFilled /> {this.state.linkedin}</a></Paragraph>
          </Content>
          <Footer className="footer">
            2020 © designed and developed by Irene Kwon
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;
