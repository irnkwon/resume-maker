import React from 'react';
import { Input, DatePicker, Space } from 'antd';

export class Experience extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        const { handleChange, handleDateChange } = this.props;
        return(
            <Space direction="vertical">
                <Input name="jobTitle" placeholder="Job Title" onChange={handleChange}></Input>
                <Input name="companyName" placeholder="Company" onChange={handleChange}></Input>
                <RangePicker bordered={true} onChange={(date, dateString) => 
                    handleDateChange(date, dateString, "companyDate")} />
                <Input name="companyLocation" placeholder="Location" onChange={handleChange}></Input>
                <TextArea name="jobDesc" placeholder="Experience Description" onChange={handleChange}></TextArea>
            </Space>
        );
    }
}