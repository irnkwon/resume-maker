import React from 'react';
import { Input, DatePicker, Space } from 'antd';

export class Experience extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        return(
            <Space direction="vertical">
                <Input name="jobTitle" placeholder="Job Title" onChange={this.handleChange}></Input>
                <Input name="companyName" placeholder="Company" onChange={this.handleChange}></Input>
                <RangePicker bordered={true} onChange={(date, dateString) => 
                    this.handleChange(date, dateString, "companyDate")} />
                <Input name="companyLocation" placeholder="Location" onChange={this.handleChange}></Input>
                <TextArea name="jobDesc" placeholder="Experience Description" onChange={this.handleChange}></TextArea>
            </Space>
        );
    }
}