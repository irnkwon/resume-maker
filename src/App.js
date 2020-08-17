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
      linkedin: "linkedin.com/in/irene-kwon",

      // Education
      schoolName: "Conestoga College",
      major: "Computer Programming/Analysis",
      degree: "Advanced Diploma",
      schoolLocation: "Waterloo, Ontario",
      schoolStartDate: "2015-09-08",
      schoolEndDate: "2020-04-22",
      eduDesc: "GPA: 3.87, Dean's Honor List, Graduation with Distinction",

      // Experience
      jobTitle: "Designer/Developer",
      companyName: "WSIB Ontairo",
      companyLocation: "Kitchener, Ontario",
      companyStartDate: "2018-04-30",
      companyEndDate: "2019-08-30",
      jobDesc: "Created 5+ web and mobile applications mainly using React, React Native, CSS, " + 
        "Node.js, Express.js, GraphQL, Firebase, Git and Sketch"
    }
  }

  handleChange = (e, dateString, id) => {
    if (id === "schoolDate") {
      this.setState({ schoolStartDate: dateString[0] });
      this.setState({ schoolEndDate: dateString[1] });
    } else if (id === "companyDate") {
      this.setState({ companyStartDate: dateString[0] });
      this.setState({ companyEndDate: dateString[1] });
    } else {
      const value = e.target.value;
      this.setState({ [e.target.name]: value });
    }
  }

  render() {

    const { Panel } = Collapse;
    const { RangePicker } = DatePicker;
    const { TextArea } = Input;
    const { Sider, Content, Footer } = Layout;
    const { Title, Paragraph, Text } = Typography;
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
                  <Input name="schoolName" placeholder="School" onChange={this.handleChange}></Input>
                  <Input name="major" placeholder="Major" onChange={this.handleChange}></Input>
                  <Input name="degree" placeholder="Degree" onChange={this.handleChange}></Input>
                  <Input name="schoolLocation" placeholder="Location" onChange={this.handleChange}></Input>
                  <RangePicker bordered={true} onChange={(date, dateString) => 
                    this.handleChange(date, dateString, "schoolDate")} />
                  <TextArea name="eduDesc" placeholder="Education Description" onChange={this.handleChange}></TextArea>
                </Space>
              </Panel>
              <Panel header="Experience" key="4">
                <Space direction="vertical">
                  <Input name="jobTitle" placeholder="Job Title" onChange={this.handleChange}></Input>
                  <Input name="companyName" placeholder="Company" onChange={this.handleChange}></Input>
                  <Input name="companyLocation" placeholder="Location" onChange={this.handleChange}></Input>
                  <RangePicker bordered={true} onChange={(date, dateString) => 
                    this.handleChange(date, dateString, "companyDate")} />
                  <TextArea name="jobDesc" placeholder="Experience Description"></TextArea>
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
            <Space direction="vertical">
              {/* Basic Information */}
              <Title level={1}>{this.state.name}</Title>

              <Space direction="vertical" size={1}>
                {/* Contact */}
                <Paragraph><PhoneFilled /> {this.state.phone}</Paragraph>
                <Paragraph><a href={"mailto:" + this.state.email}><MailFilled /> {this.state.email}</a></Paragraph>
                <Paragraph><a href={"http://" + this.state.portfolio} target="_blank" rel="noopener noreferrer">
                  <CodeFilled /> {this.state.portfolio}</a></Paragraph>
                <Paragraph><a href={"http://" + this.state.github} target="_blank" rel="noopener noreferrer">
                  <GithubFilled /> {this.state.github}</a></Paragraph>
                <Paragraph><a href={"http://" + this.state.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinFilled /> {this.state.linkedin}</a></Paragraph>
              </Space>

              {/* Education */}
              <Space direction="vertical" style={{ marginTop: 30 }}>
                <Title level={3} underline>Education</Title>
                <Title level={4}>{this.state.major}, {this.state.schoolName}</Title>
                <Text strong>{this.state.degree}</Text>
                <Text type="secondary">{this.state.schoolStartDate} to {this.state.schoolEndDate} · {this.state.schoolLocation}
                </Text>
                <Text>{this.state.eduDesc}</Text>
              </Space>

              {/* Experience */}
              <Space direction="vertical" style={{ marginTop: 30 }}>
                <Title level={3} underline>Experience</Title>
                <Title level={4}>{this.state.jobTitle}, {this.state.companyName}</Title>
                <Text type="secondary">{this.state.companyStartDate} to {this.state.companyEndDate} · {this.state.companyLocation}
                </Text>
                <Text>{this.state.jobDesc}</Text>
              </Space>
            </Space>
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
