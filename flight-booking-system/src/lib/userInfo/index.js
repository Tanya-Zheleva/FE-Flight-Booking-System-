import { Button } from "antd";
import React from "react";
import './styles.css';

const user = { personal_info_id: 4654684564, username: 'pesho', password: '123' };
const userPersonalInfo = {
    id: 4654684564,
    card_number: '546546545',
    first_name: 'Pesho',
    last_name: 'Ivanov',
    identification_number: '5465432',
    phone_number: '+359 0000000000'
};

const UserInfo = (props) => {
    return (
        <div className="info-container">
            <h2>User profile</h2>
            <div className="info-row">
                <span className="info">Username: {user.username}</span>
                <Button type="link">Click to change password</Button>
            </div>
            <div className="info-row">
                <span className="info">First name: {userPersonalInfo.first_name}</span>
                <span className="info">Last name: {userPersonalInfo.last_name}</span>
            </div>
            <div className="info-row">
                <span className="info">Phone: {userPersonalInfo.phone_number}</span>
                <span className="info">Card number: {userPersonalInfo.card_number}</span>
            </div>
        </div>
    );
};

export default UserInfo;