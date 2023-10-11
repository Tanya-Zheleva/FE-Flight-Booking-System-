import { useEffect } from "react";
import { useFlightsStore } from "../../store/flightsStore";
import { Button, Card, Col, Divider, Row } from "antd";
import './styles.css';
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";

const CardTitle = ({ info, time })  => {
    return (
        <>
            <p>{info}</p>
            <p>{time}</p>
        </>
    );
};

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
    const navigate = useNavigate();

    useEffect(() => {
        flightsStore.loadData();
    }, []);

    const { flights } = flightsStore;

    const onFlightBook = (flight) => {
        flightsStore.setActiveFlightBooking(flight);

        navigate('/book-flight');
    }

    const displayedFlights = flights.map(flight => {
        const { departureAirport, departureTime, arrivalAirport, arrivalTime, flightStatus, flightNumber, startingPrice } = flight;

        const { code: departureCode, name: departureName } = departureAirport;
        const { code: arrivalCode, name: arrivalName } = arrivalAirport;

        const departureDate = new Date(departureTime);
        const arrivalDate = new Date(arrivalTime);

        const departureCardTitle = <CardTitle info={`${departureCode} ${departureName}`} time={dayjs(departureDate).format("HH:mm")} />
        const arrivalCardTitle = <CardTitle info={`${arrivalCode} ${arrivalName}`} time={dayjs(arrivalDate).format("HH:mm")} />

        return (
            <Row className="flight-row">
                <Col span={23} className="flight-info">
                    <Col span={6}>
                        <Card title={departureCardTitle} bordered>
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
                        <Divider>
                            Starting from: {startingPrice}$
                        </Divider>
                    </Col>
                    <Col span={6}>
                        <Card title={arrivalCardTitle} bordered>
                            {arrivalDate.toDateString()}
                        </Card>
                    </Col>
                </Col>
                <Col span={1}>
                    <Button onClick={() => onFlightBook(flight)}>
                        Book flight
                    </Button>
                </Col>
            </Row>
        )
    });

    return (
        <div className="flights-container">
            {displayedFlights}
        </div>
    );
};

export default FlightList;