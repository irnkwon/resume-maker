import React from 'react';
import { Input, Space } from 'antd';

export class Projects extends React.Component {
    render() {
        const { TextArea } = Input;
        return(
            <Space direction="vertical">
                <Input name="projectName" placeholder="Project Name" onChange={this.handleChange}></Input>
                <Input name="projectLink" placeholder="Project Link" onChange={this.handleChange}></Input>
                <TextArea name="projectDesc" placeholder="Project Description" onChange={this.handleChange}></TextArea>
            </Space>
        );
    }
}