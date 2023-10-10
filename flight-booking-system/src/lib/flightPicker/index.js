import React, { useEffect, useMemo } from "react";
import { DatePicker, Form } from "antd";
import AutoComplete from "../autocomplete.js/index.js";
import './styles.css';
import { useCountryStore } from "../../store/countryStore.js";
import { useAirportStore } from '../../store/airportStore.js';
import { useCityStore } from '../../store/cityStore.js';
import SubmitButton from "../submitButton/index.js";
import { useFlightsStore } from "../../store/flightsStore.js";

const FlightPicker = (props) => {
    const countryState = useCountryStore();
    const airportState = useAirportStore();
    const cityState = useCityStore();
    const flightsStore = useFlightsStore();

    useEffect(() => {
        countryState.loadData();
        airportState.loadData();
        cityState.loadData();
    }, []);

    const options = useMemo(() => {
        const allData = [...countryState.countries, ...airportState.airports, ...cityState.cities];

        return allData.map(option => ({ id: `${option.code}_${option.name}`, value: option.name }))
    }, [countryState.countries, airportState.airports, cityState.cities])

    const [form] = Form.useForm();

    const onSubmit = () => {
        const fieldsValues = form.getFieldsValue();
        
        //TODO: pass values to load
        flightsStore.loadData();
    };
    
    return (
        <Form form={form} name="FlightPicker" layout="inline">
            <Form.Item name="from" label="From" className="autocomplete">
                <AutoComplete options={options} filterOption />
            </Form.Item>
            <Form.Item name="to" label="To" className="autocomplete">
                <AutoComplete options={options} filterOption />
            </Form.Item>
            <Form.Item name="dateRange" label="Dates">
                <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item>
                <SubmitButton form={form} onClick={onSubmit} />
            </Form.Item>
        </Form>
    )
}

export default FlightPicker;