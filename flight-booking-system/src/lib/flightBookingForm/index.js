import React from "react";
import './styles.css';
import { Form, Input, InputNumber, Select } from 'antd';
import { commonFormConfig, emailFieldValidationRules, passwordValidationRules } from '../../configurations';
import SubmitButton from "../submitButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/userStore";
import { useFlightsStore } from "../../store/flightsStore";

const buttonConfig = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const travelClassOptions = [
    { value: 'Economy', label: 'Economy' },
    { value: 'Business', label: 'Business' },
    { value: 'First', label: 'First' }
];

const luggageTypeOptions = [
    { value: 'Free', label: 'Free' },
    { value: 'Cabin', label: 'Cabin' },
    { value: 'Checked and Cabin', label: 'Checked and Cabin' }
];

const seatLetterOptions = [
    { value: 'A', label: 'A' },
    { value: 'B', label: 'B' },
    { value: 'C', label: 'C' },
    { value: 'D', label: 'D' },
    { value: 'E', label: 'E' },
    { value: 'F', label: 'F' }
];

//TODO: add flight number to url
const FlightBookingForm = (props) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();

    const { activeFlightBooking } = useFlightsStore();

    const { flightNumber } = activeFlightBooking || {};
    const { activeUser } = useUserStore() || { username: 'a@gmail.com' };

    const onSubmit = () => {
        const fieldsValues = form.getFieldsValue();
        console.log(fieldsValues);

        
        axios.post('/tickets', fieldsValues)
            .then(() => {
                navigate('/');
            })
            .catch(error => {
                alert(error);
            });
    };

    return (
        <div className="flight-booking-form-container">
            <Form {...commonFormConfig} form={form}>
                <Form.Item name="flightId" label="Flight number" initialValue={flightNumber}>
                    <Input disabled  />
                </Form.Item>
                <Form.Item name="travelCass" label="Travel class" required >
                    <Select placeholder="Select travel class" options={travelClassOptions} />
                </Form.Item>
                <Form.Item name="luggageType" label="Luggage type" required >
                    <Select placeholder="Select luggage type" options={luggageTypeOptions} />
                </Form.Item>
                <Form.Item name="seat" label="Select seat" required >
                    <div className="seat-picker">
                        <Select options={seatLetterOptions} />
                        <InputNumber min={1} max={30} />
                    </div>
                </Form.Item>
                <Form.Item name="username" label="User" initialValue={(activeUser || {}).username || 'a@gmail.com'}>
                    <Input disabled />
                </Form.Item>
                <Form.Item {...buttonConfig}>
                    <SubmitButton form={form} onClick={onSubmit} />
                </Form.Item>
            </Form>
        </div>
    );
}

export default FlightBookingForm;