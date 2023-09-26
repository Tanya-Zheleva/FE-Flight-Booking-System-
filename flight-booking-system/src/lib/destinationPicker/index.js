import React from "react";
import { Button, DatePicker, Space } from "antd";
import AutoComplete from "../autocomplete.js";
import './styles.css';

const fromDestinations = [
    { value: 'Sofia', id: 'SOF' },
    { value: 'Madrid', id: 'MAD' },
    { value: 'Rome', id: 'ROME' }
];

const toDestinations = [
    { value: 'London', id: 'LND' },
    { value: 'Sofia', id: 'SOF' },
    { value: 'Varna', id: 'VAR' }
];

const DestinationPicker = (props) => {
    return (
        <Space direction="horizontal" size={12} className="destination-picker">
            <div className="from-to-container">
                <AutoComplete label="From" options={fromDestinations} />
                <AutoComplete label="To" options={toDestinations} />
            </div>
            <DatePicker />
            <Button type="primary">Search</Button>
        </Space>
    );
}

export default DestinationPicker;