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
      name: "[Your Name]",
      summary: "[Summary]",

      // Contact
      phone: "[Phone Number]",
      email: "[Email Address]",
      portfolio: "[Portfolio Address]",
      github: "[Github Address]",
      linkedin: "[LinkedIn Address]",

      // Education
      education: [
        {
          key: 0,
          schoolName: "[School 0]",
          major: "[Major]",
          degree: "[Degree]",
          schoolLocation: "[Location]",
          schoolStartDate: "[Start Date]",
          schoolEndDate: "[End Date]",
          eduDesc: "[Description]"
        }
      ],

      // Experience
      experience: [
        {
          key: 0,
          jobTitle: "[Job Title]",
          companyName: "[Company 0]",
          companyLocation: "[Location]",
          companyStartDate: "[Start Date]",
          companyEndDate: "[End Date]",
          jobDesc: "[Description]"
        }
      ],

      // Projects
      projects: [
        {
          key: 0,
          projectName: "[Project 0]",
          projectLink: "github.com/irnkwon/resume-maker",
          projectDesc: "[Description]"
        }
      ]
    }
  }

  handleChange = (e, key, id) => {
    const value = e.target.value;
    const name = e.target.name;

    if (id === "edu") {
      const newEducation = this.state.education.slice();
      const item = [...newEducation.filter(i => i.key === key)];
      item[0][name] = value;
      this.setState({ education: newEducation });
    } if (id === "exp") {
      const newExperience = this.state.experience.slice();
      const item = [...newExperience.filter(i => i.key === key)];
      item[0][name] = value;
      this.setState({ experience: newExperience });
    } if (id === "projects") {
      const newProjects = this.state.projects.slice();
      const item = [...newProjects.filter(i => i.key === key)];
      item[0][name] = value;
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
        key: prevState.education.length !== 0 ? prevState.education[prevState.education.length - 1].key + 1 : 0,
        schoolName: prevState.education.length !== 0 ? 
          ("[School " + (prevState.education[prevState.education.length - 1].key + 1)  + "]") : "[School 0]",
        major: "[Major]",
        degree: "[Degree]",
        schoolLocation: "[Location]",
        schoolStartDate: "[Start Date]",
        schoolEndDate: "[End Date]",
        eduDesc: "[Description]"
      }]
    }));
  }

  addExperience = () => {
    this.setState(prevState => ({
      experience: [...prevState.experience, {
        key: prevState.experience.length !== 0 ? prevState.experience[prevState.experience.length - 1].key + 1 : 0,
        jobTitle: "[Job Title]",
        companyName: prevState.experience.length !== 0 ? 
          ("[Company " + (prevState.experience[prevState.experience.length - 1].key + 1)  + "]") : "[Company 0]",
        companyLocation: "[Location]",
        companyStartDate: "[Start Date]",
        companyEndDate: "[End Date]",
        jobDesc: "[Description]"
      }]
    }));
  }
  
  addProject = () => {
    this.setState(prevState => ({
      projects: [...prevState.projects, {
        key: prevState.projects.length !== 0 ? prevState.projects[prevState.projects.length - 1].key + 1 : 0,
        projectName: prevState.projects.length !== 0 ? 
        ("[Project " + (prevState.projects[prevState.projects.length - 1].key + 1)  + "]") : "[Project 0]",
        projectLink: "github.com/irnkwon/resume-maker",
        projectDesc: "[Description]"
      }]
    }));
  }

  handleRemove = (id, key) => {
    this.setState((prevState) => ({
      [id]: [...prevState[id].slice(0, key), ...prevState[id].slice(key + 1)]
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
                            <Button type="link" onClick={() => this.handleRemove("education", i.key)} danger>Remove</Button>
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
                            <Button type="link" onClick={() => this.handleRemove("experience", i.key)} danger>Remove</Button>
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
                            <Button type="link" onClick={() => this.handleRemove("projects", i.key)} danger>Remove</Button>
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
            <a href="https://github.com/irnkwon/resume-maker" target="_blank"
              rel="noopener noreferrer">2020 © designed and developed by Irene Kwon</a>
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