import React from 'react';
import moment from 'moment';
import { Input, DatePicker, Space } from 'antd';

export class Experience extends React.Component {
    render() {
        const { RangePicker } = DatePicker;
        const { TextArea } = Input;
        const { handleChange, handleDateChange, expKey, title, company, start, end, location, desc } = this.props;
        return (
            <Space direction="vertical">
                <Input name="jobTitle" placeholder="Job Title" value={title}
                    onChange={(e) => handleChange(e, expKey, "exp")}></Input>
                <Input name="companyName" placeholder={"Company " + expKey}  value={company}
                    onChange={(e) => handleChange(e, expKey, "exp")}></Input>
                <RangePicker bordered={true} value={[moment(start), moment(end)]}
                    onChange={(date, dateString) => handleDateChange(date, dateString, "companyDate", expKey, "exp")} />
                <Input name="companyLocation" placeholder="Location" value={location}
                    onChange={(e) => handleChange(e, expKey, "exp")}></Input>
                <TextArea name="jobDesc" placeholder="Experience Description" value={desc} 
                    onChange={(e) => handleChange(e, expKey, "exp")}></TextArea>
            </Space>
        );
    }
}