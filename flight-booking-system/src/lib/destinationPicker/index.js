import React, { useEffect, useMemo } from "react";
import { Button, DatePicker, Space } from "antd";
import AutoComplete from "../autocomplete.js";
import './styles.css';
import { useCountryStore } from "../../store/countryStore.js";
import { useAirportStore } from '../../store/airportStore.js';
import { useCityStore } from '../../store/cityStore.js';

const DestinationPicker = (props) => {
    const countryState = useCountryStore();
    const airportState = useAirportStore();
    const cityState = useCityStore();

    useEffect(() => {
        countryState.loadData();
        airportState.loadData();
        cityState.loadData();
    }, []);

    const options = useMemo(() => {
        const allData = [...countryState.countries, ...airportState.airports, ...cityState.cities];

        return allData.map(option => ({ id: `${option.code}_${option.name}`, value: option.name }))
    }, [countryState.countries, airportState.airports, cityState.cities])

    return (
        <Space direction="horizontal" size={12} className="destination-picker">
            <div className="from-to-container">
                <AutoComplete label="From" options={options} filterOption />
                <AutoComplete label="To" options={options} filterOption />
            </div>
            <DatePicker />
            <Button type="primary">Search</Button>
        </Space>
    );
}

export default DestinationPicker;