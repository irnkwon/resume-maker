import React from 'react';
import './App.css';
import { Card, 
  Collapse, 
  Input, 
  Space,
  Layout,
  Typography,
  Select,
  Button
} from 'antd';

import {
  PhoneFilled,
  MailFilled,
  CodeFilled,
  GithubFilled,
  LinkedinFilled,
  LinkOutlined
} from '@ant-design/icons';

import { Education } from './Components/Education';
import { Experience } from './Components/Experience';
import { Projects } from './Components/Projects';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // Basic Information
      name: "Irene Kwon",
      summary: "UI/UX Designer | Software Developer",

      // Contact
      phone: "123-456-7890",
      email: "irene.haeryun.kwon@gmail.com",
      portfolio: "irnkwon.github.io",
      github: "github.com/irnkwon",
      linkedin: "linkedin.com/in/irene-kwon",

      // Education
      education: [
        {
          key: 1,
          schoolName: "Conestoga College",
          major: "Computer Programming/Analysis",
          degree: "Advanced Diploma",
          schoolLocation: "Waterloo, Ontario",
          schoolStartDate: "2015-09-08",
          schoolEndDate: "2020-04-22",
          eduDesc: "GPA: 3.87, Dean's Honor List, Graduation with Distinction"
        }
      ],

      // Experience
      jobTitle: "Designer/Developer",
      companyName: "WSIB Ontairo",
      companyLocation: "Kitchener, Ontario",
      companyStartDate: "2018-04-30",
      companyEndDate: "2019-08-30",
      jobDesc: "Created 5+ web and mobile applications mainly using React, React Native, CSS, " + 
        "Node.js, Express.js, GraphQL, Firebase, Git and Sketch",

      // Projects
      projectName: "Resume Maker",
      projectLink: "github.com/irnkwon/resume-maker",
      projectDesc: "Implemented a web application that helps users make an online resume"
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

  addEducation = () => {
    let curKey = this.state.key;
    this.setState(prevState => ({
      education: [...prevState.education, {
        key: curKey + 1,
        schoolName: "",
        major: "",
        degree: "",
        schoolLocation: "",
        schoolStartDate: "",
        schoolEndDate: "",
        eduDesc: ""
      }]
    }));
    console.log(this.state.education);
  }

  render() {

    const { Panel } = Collapse;
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
        {/* Sider Starts */}
        <Sider width={350} theme={"light"}>
          <Card title="Resume Maker" bordered={false}>
            <Collapse defaultActiveKey={['1', '2', '3', '4', '5']} ghost>
              {siderSections.map((i) => (
                <Panel header={i.header} key={i.key}>
                  {
                    i.header === "Basic Information" ? (
                      <Space direction="vertical" size={12}>
                        <Input name="name" placeholder="Your Name" onChange={this.handleChange}></Input>
                        <TextArea name="summary" placeholder="Summary" onChange={this.handleChange}></TextArea>
                      </Space>
                    ) : i.header === "Contact" ? (
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
                    ) : i.header === "Education" ? (
                      <Space direction="vertical">
                        {this.state.education.map((i) => (
                          <Education key={i.key} />
                        ))}
                        <Button type="link" onClick={this.addEducation}>Add More Education</Button>
                      </Space>
                    ) : i.header === "Experience" ? (
                      <Space direction="vertical">
                        <Experience />
                        <Button type="link">Add More Experience</Button>
                      </Space>
                    ) : i.header === "Projects" ? (
                        <Space direction="vertical">
                        <Projects />
                        <Button type="link">Add More Projects</Button>
                      </Space>
                    ) : null
                  }
                </Panel>
              ))}
            </Collapse>
          </Card>
        </Sider>
        {/* Sider Ends */}

        {/* Main Content Starts */}
        <Layout className="main-content">
          <Content>
            <Space direction="vertical">
              <Title level={1}>{this.state.name}</Title>
              <Title level={4}>{this.state.summary}</Title>

              <Space direction="vertical" size={1}>
                <Paragraph><PhoneFilled /> {this.state.phone}</Paragraph>
                <Paragraph><a href={"mailto:" + this.state.email}><MailFilled /> {this.state.email}</a></Paragraph>
                <Paragraph><a href={"http://" + this.state.portfolio} target="_blank" rel="noopener noreferrer">
                  <CodeFilled /> {this.state.portfolio}</a></Paragraph>
                <Paragraph><a href={"http://" + this.state.github} target="_blank" rel="noopener noreferrer">
                  <GithubFilled /> {this.state.github}</a></Paragraph>
                <Paragraph><a href={"http://" + this.state.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinFilled /> {this.state.linkedin}</a></Paragraph>
              </Space>

              <Space direction="vertical" style={{ marginTop: 30 }}>
                <Title level={3} underline>Education</Title>
                {this.state.education.map((i) => (
                  <Space direction="vertical" key={i.key}>
                    <Title level={4}>{i.major}, {i.schoolName}</Title>
                    <Text strong>{i.degree}</Text>
                    <Text type="secondary">{i.schoolStartDate} to {i.schoolEndDate} · {i.schoolLocation}
                    </Text>
                    <Text>{i.eduDesc}</Text>
                  </Space>
                ))}
              </Space>

              <Space direction="vertical" style={{ marginTop: 30 }}>
                <Title level={3} underline>Experience</Title>
                <Title level={4}>{this.state.jobTitle}, {this.state.companyName}</Title>
                <Text type="secondary">{this.state.companyStartDate} to {this.state.companyEndDate} · {this.state.companyLocation}
                </Text>
                <Text>{this.state.jobDesc}</Text>
              </Space>

              <Space direction="vertical" style={{ marginTop: 30 }}>
                <Title level={3} underline>Projects</Title>    
                <Space direction="horizontal" size={7}>
                  <Title level={4}>{this.state.projectName}</Title>
                  <a href={"http://" + this.state.projectLink} target="_blank" rel="noopener noreferrer">
                    <LinkOutlined style={{ fontSize: 20 }} /></a>
                </Space>   
                <Text>{this.state.projectDesc}</Text>
              </Space>
            </Space>
          </Content>
          {/* Main Content Ends */}

          <Footer className="footer">
            2020 © designed and developed by Irene Kwon
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default App;

const siderSections = [
  {
    key: 1,
    header: "Basic Information"
  },
  {
    key: 2,
    header: "Contact"
  },
  {
    key: 3,
    header: "Education"
  },
  {
    key: 4,
    header: "Experience"
  },
  {
    key: 5,
    header: "Projects"
  }
]