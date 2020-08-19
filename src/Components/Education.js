import React from 'react';
import moment from 'moment';
import { Input, DatePicker, Space } from 'antd';

export class Education extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        const { handleChange, handleDateChange, eduKey, name, major, degree, start, end, location, desc } = this.props;
        return (
            <Space direction="vertical">
                <Input name="schoolName" placeholder={"School " + eduKey} value={name}
                    onChange={(e) => handleChange(e, eduKey, "edu")}></Input>
                <Input name="major" placeholder="Major" onChange={(e) => handleChange(e, eduKey, "edu")} 
                    value={major}></Input>
                <Input name="degree" placeholder="Degree" onChange={(e) => handleChange(e, eduKey, "edu")} 
                    value={degree}></Input>
                <RangePicker bordered={true} value={[moment(start), moment(end)]} onChange={(date, dateString) => 
                    handleDateChange(date, dateString, "schoolDate", eduKey, "edu")} />
                <Input name="schoolLocation" placeholder="Location" value={location}
                    onChange={(e) => handleChange(e, eduKey, "edu")}></Input>
                <TextArea name="eduDesc" placeholder="Education Description" value={desc}
                    onChange={(e) => handleChange(e, eduKey, "edu")}></TextArea>
            </Space>
        );
    }
}