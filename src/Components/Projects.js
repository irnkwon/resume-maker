import React from 'react';
import { Input, Space } from 'antd';

export class Projects extends React.Component {
    render() {
        const { TextArea } = Input;
        const { handleChange, projectKey, name, link, desc } = this.props;
        return (
            <Space direction="vertical">
                <Input name="projectName" placeholder={"Project " + projectKey} value={name}
                    onChange={(e) => handleChange(e, projectKey, "projects")}></Input>
                <Input name="projectLink" placeholder="Project Link" value={link}
                    onChange={(e) => handleChange(e, projectKey, "projects")}></Input>
                <TextArea name="projectDesc" placeholder="Project Description" value={desc}
                    onChange={(e) => handleChange(e, projectKey, "projects")}></TextArea>
            </Space>
        );
    }
}