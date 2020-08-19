import React from 'react';
import { Input, DatePicker, Space } from 'antd';

export class Education extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        const { handleChange } = this.props;
        return (
            <Space direction="vertical">
                <Input name="schoolName" placeholder="School" onChange={handleChange}></Input>
                <Input name="major" placeholder="Major" onChange={handleChange}></Input>
                <Input name="degree" placeholder="Degree" onChange={handleChange}></Input>
                <RangePicker bordered={true} onChange={(date, dateString) => 
                handleChange(date, dateString, "schoolDate")} />
                <Input name="schoolLocation" placeholder="Location" onChange={handleChange}></Input>
                <TextArea name="eduDesc" placeholder="Education Description" onChange={handleChange}></TextArea>
            </Space>
        );
    }
}