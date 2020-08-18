import React from 'react';
import { Input, DatePicker, Space } from 'antd';

export class Education extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        return(
            <Space direction="vertical">
                <Input name="schoolName" placeholder="School" onChange={this.handleChange}></Input>
                <Input name="major" placeholder="Major" onChange={this.handleChange}></Input>
                <Input name="degree" placeholder="Degree" onChange={this.handleChange}></Input>
                <RangePicker bordered={true} onChange={(date, dateString) => 
                this.handleChange(date, dateString, "schoolDate")} />
                <Input name="schoolLocation" placeholder="Location" onChange={this.handleChange}></Input>
                <TextArea name="eduDesc" placeholder="Education Description" onChange={this.handleChange}></TextArea>
            </Space>
        );
    }
}