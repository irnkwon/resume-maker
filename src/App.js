import React from 'react';
import './App.css';
import { Card, 
  Collapse, 
  Input, 
  Space,
  Layout,
  Typography,
  Select,
  Button,
  Divider
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
          key: 0,
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
      experience: [
        {
          key: 0,
          jobTitle: "Designer/Developer",
          companyName: "WSIB Ontairo",
          companyLocation: "Kitchener, Ontario",
          companyStartDate: "2018-04-30",
          companyEndDate: "2019-08-30",
          jobDesc: "Created 5+ web and mobile applications mainly using React, React Native, CSS, " + 
            "Node.js, Express.js, GraphQL, Firebase, Git and Sketch"
        }
      ],

      // Projects
      projects: [
        {
          key: 0,
          projectName: "Resume Maker",
          projectLink: "github.com/irnkwon/resume-maker",
          projectDesc: "Implemented a web application that helps users make an online resume"
        }
      ]
    }
  }

  handleChange = (e, key, id) => {
    const value = e.target.value;
    const name = e.target.name;

    if (id === "edu") {
      const newEducation = this.state.education.slice();
      newEducation[key][name] = value;
      this.setState({ education: newEducation });
    } if (id === "exp") {
      const newExperience = this.state.experience.slice();
      newExperience[key][name] = value;
      this.setState({ experience: newExperience });
    } if (id === "projects") {
      const newProjects = this.state.projects.slice();
      newProjects[key][name] = value;
      this.setState({ projects: newProjects });
    } else { // Basic Information
      this.setState({ [name]: value });
    }
  }

  handleDateChange = (date, dateString, id, key) => {
    if (id === "schoolDate") { // Education
      const newEducation = this.state.education.slice();
      newEducation[key].schoolStartDate = dateString[0];
      newEducation[key].schoolEndDate = dateString[1];
      this.setState({ education: newEducation });
    } if (id === "companyDate") { // Experience
      const newExperience = this.state.experience.slice();
      newExperience[key].companyStartDate = dateString[0];
      newExperience[key].companyEndDate = dateString[1];
      this.setState({ experience: newExperience });
    }
  }

  addEducation = () => {
    this.setState(prevState => ({
      education: [...prevState.education, {
        key: prevState.education[prevState.education.length - 1].key + 1,
        schoolName: "",
        major: "",
        degree: "",
        schoolLocation: "",
        schoolStartDate: "",
        schoolEndDate: "",
        eduDesc: ""
      }]
    }));
  }

  addExperience = () => {
    this.setState(prevState => ({
      experience: [...prevState.experience, {
        key: prevState.experience[prevState.experience.length - 1].key + 1,
        jobTitle: "",
        companyName: "",
        companyLocation: "",
        companyStartDate: "",
        companyEndDate: "",
        jobDesc: ""
      }]
    }));
  }
  
  addProject = () => {
    this.setState(prevState => ({
      projects: [...prevState.projects, {
        key: prevState.projects[prevState.projects.length - 1].key + 1,
        projectName: "",
        projectLink: "",
        projectDesc: ""
      }]
    }));
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
                          <React.Fragment key={i.key}>
                            {i.key !== 0 ? <Divider /> : null}
                            <Education handleChange={this.handleChange} 
                              handleDateChange={this.handleDateChange} eduKey={i.key} />
                          </React.Fragment>
                        ))}
                        <Button type="link" onClick={this.addEducation}>Add More Education</Button>
                      </Space>
                    ) : i.header === "Experience" ? (
                      <Space direction="vertical">
                        {this.state.experience.map((i) => (
                          <React.Fragment key={i.key}>
                            {i.key !== 0 ? <Divider /> : null}
                            <Experience handleChange={this.handleChange} 
                              handleDateChange={this.handleDateChange} expKey={i.key} />
                          </React.Fragment>
                        ))}
                        <Button type="link" onClick={this.addExperience}>Add More Experience</Button>
                      </Space>
                    ) : i.header === "Projects" ? (
                        <Space direction="vertical">
                        {this.state.projects.map((i) => (
                          <React.Fragment key={i.key}>
                            {i.key !== 0 ? <Divider /> : null}
                            <Projects handleChange={this.handleChange} projectKey={i.key} />
                          </React.Fragment>
                        ))}
                        <Button type="link" onClick={this.addProject}>Add More Project</Button>
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
                  <Space direction="vertical" key={i.key} style={i.key !== 0 ? { marginTop: 15 } : null}>
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
                {this.state.experience.map((i) => (
                  <Space direction="vertical" key={i.key} style={i.key !== 0 ? { marginTop: 15 } : null}>
                    <Title level={4}>{i.jobTitle}, {i.companyName}</Title>
                    <Text type="secondary">{i.companyStartDate} to {i.companyEndDate} · {i.companyLocation}
                    </Text>
                    <Text>{i.jobDesc}</Text>
                  </Space>
                ))}
              </Space>

              <Space direction="vertical" style={{ marginTop: 30 }}>
                <Title level={3} underline>Projects</Title>
                {this.state.projects.map((i) => (
                  <Space direction="vertical" key={i.key} style={i.key !== 0 ? { marginTop: 15 } : null}>
                    <Space direction="horizontal" size={7}>
                      <Title level={4}>{i.projectName}</Title>
                      <a href={"http://" + i.projectLink} target="_blank" rel="noopener noreferrer">
                        <LinkOutlined style={{ fontSize: 20 }} /></a>
                    </Space>   
                    <Text>{i.projectDesc}</Text>
                  </Space>
                ))}
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