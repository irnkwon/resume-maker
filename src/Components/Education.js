import React from 'react';
import { Input, DatePicker, Space } from 'antd';

export class Education extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        const { handleChange, handleDateChange, eduKey } = this.props;
        return (
            <Space direction="vertical">
                <Input name="schoolName" placeholder="School" onChange={(e) => handleChange(e, eduKey, "edu")}></Input>
                <Input name="major" placeholder="Major" onChange={(e) => handleChange(e, eduKey, "edu")}></Input>
                <Input name="degree" placeholder="Degree" onChange={(e) => handleChange(e, eduKey, "edu")}></Input>
                <RangePicker bordered={true} onChange={(date, dateString) => 
                    handleDateChange(date, dateString, "schoolDate", eduKey, "edu")} />
                <Input name="schoolLocation" placeholder="Location" 
                    onChange={(e) => handleChange(e, eduKey, "edu")}></Input>
                <TextArea name="eduDesc" placeholder="Education Description" 
                    onChange={(e) => handleChange(e, eduKey, "edu")}></TextArea>
            </Space>
        );
    }
}