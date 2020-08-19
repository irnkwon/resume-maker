import React from 'react';
import { Input, DatePicker, Space } from 'antd';

export class Experience extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        const { handleChange, handleDateChange, expKey } = this.props;
        return (
            <Space direction="vertical">
                <Input name="jobTitle" placeholder="Job Title" onChange={(e) => handleChange(e, expKey)}></Input>
                <Input name="companyName" placeholder="Company" onChange={(e) => handleChange(e, expKey)}></Input>
                <RangePicker bordered={true} onChange={(date, dateString) => 
                    handleDateChange(date, dateString, "companyDate", expKey)} />
                <Input name="companyLocation" placeholder="Location" onChange={(e) => handleChange(e, expKey)}></Input>
                <TextArea name="jobDesc" placeholder="Experience Description" 
                    onChange={(e) => handleChange(e, expKey)}></TextArea>
            </Space>
        );
    }
}