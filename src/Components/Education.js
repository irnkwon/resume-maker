import React from 'react';
import { Input, DatePicker, Space } from 'antd';

export class Education extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        const { handleChange, handleDateChange, eduKey } = this.props;
        return (
            <Space direction="vertical">
                <Input name="schoolName" placeholder="School" onChange={(e) => handleChange(e, eduKey)}></Input>
                <Input name="major" placeholder="Major" onChange={(e) => handleChange(e, eduKey)}></Input>
                <Input name="degree" placeholder="Degree" onChange={(e) => handleChange(e, eduKey)}></Input>
                <RangePicker bordered={true} onChange={(date, dateString) => 
                handleDateChange(date, dateString, "schoolDate", eduKey)} />
                <Input name="schoolLocation" placeholder="Location" onChange={(e) => handleChange(e, eduKey)}></Input>
                <TextArea name="eduDesc" placeholder="Education Description" 
                    onChange={(e) => handleChange(e, eduKey)}></TextArea>
            </Space>
        );
    }
}