import { useEffect } from "react";
import { useFlightsStore } from "../../store/flightsStore";
import { Card, Col, Divider, Row } from "antd";
import './styles.css';

const getHoursMinutesDifference = (startDate, endDate) => {
    // Calculate the time difference in milliseconds
    const timeDifference = Math.abs(endDate - startDate);

    // Calculate hours and minutes
    const hours = Math.floor(timeDifference / 3600000); // 1 hour = 3600000 milliseconds
    const minutes = Math.floor((timeDifference % 3600000) / 60000); // 1 minute = 60000 milliseconds

    // Create the hours and minutes string
    const hoursString = hours > 0 ? `${hours} ${hours === 1 ? 'hour' : 'hours'}` : '';
    const minutesString = minutes > 0 ? `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}` : '';
    // Combine hours and minutes into a single string
    const differenceString = `${hoursString} ${minutesString}`.trim();
    return differenceString;
}

const FlightList = (props) => {
    const flightsStore = useFlightsStore();

    useEffect(() => {
        flightsStore.loadData();
    }, []);

    const { flights } = flightsStore;

    const displayedFlights = flights.map(flight => {
        const { departureAirport, departureTime, arrivalAirport, arrivalTime, flightStatus, flightNumber } = flight;

        const { code: departureCode, name: departureName } = departureAirport;
        const { code: arrivalCode, name: arrivalName } = arrivalAirport;

        const departureDate = new Date(departureTime);
        const arrivalDate = new Date(arrivalTime);

        return (
            <Row className="flight-row">
                <Col span={6}>
                    <Card title={`${departureCode} ${departureName}`} bordered={false}>
                        {departureDate.toDateString()}
                    </Card>
                </Col>
                <Col span={12}>
                    <Divider>
                        Duration: {getHoursMinutesDifference(departureDate, arrivalDate)}
                    </Divider>
                    <Divider>
                        Flight number: {flightNumber}
                    </Divider>
                    <Divider>
                        Status: {flightStatus.toLowerCase()}
                    </Divider>
                </Col>
                <Col span={6}>
                    <Card title={`${arrivalCode} ${arrivalName}`} bordered={true}>
                        {arrivalDate.toDateString()}
                    </Card>
                </Col>
            </Row>
            //Add return time if the flight is two way
        )
    });

    return (
        <div className="flights-container">
            {displayedFlights}
        </div>
    );
};

export default FlightList;