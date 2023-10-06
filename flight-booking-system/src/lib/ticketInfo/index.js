import React from "react";
import { Button, Tabs } from "antd";

const tabItems = [
    {
        label: 'Upcoming',
        key: 'upcoming',
        children: 'Tab 1',
    },
    {
        label: 'Past',
        key: 'past',
        children: 'Tab 2'
    }
]

const TicketInfo = (props) => {
    return (
        <Tabs centered className="ticket-tabs" items={tabItems} />
    );
};

export default TicketInfo;