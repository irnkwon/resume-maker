import React from 'react';
import { Input, Space } from 'antd';

export class Projects extends React.Component {
    render() {
        const { TextArea } = Input;
        const { handleChange, projectKey } = this.props;
        return (
            <Space direction="vertical">
                <Input name="projectName" placeholder="Project Name" 
                    onChange={(e) => handleChange(e, projectKey, "projects")}></Input>
                <Input name="projectLink" placeholder="Project Link" 
                    onChange={(e) => handleChange(e, projectKey, "projects")}></Input>
                <TextArea name="projectDesc" placeholder="Project Description" 
                    onChange={(e) => handleChange(e, projectKey, "projects")}></TextArea>
            </Space>
        );
    }
}