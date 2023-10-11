import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useTicketStore } from "../../store/ticketStore";

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

const TicketList = (props) => {
    return (
        <div>123</div>
    )
}

const TicketInfo = (props) => {
    const ticketStore = useTicketStore();

    useEffect(() => {
        ticketStore.loadData();
    }, []);

    // const items = ticketStore.tickets.map(ticket => {
    //     return ticket;
    // });

    return (
        <Tabs centered className="ticket-tabs" items={tabItems} />
    );
};

export default TicketInfo;