import { Modal } from "antd";
import React, { useEffect } from "react";
import { useCreaditCardInfoStore } from "../../store/creaditCardInfoStore";

const CreaditCardInfo = ({ cardNumber }) => {
    const creaditCardInfoState = useCreaditCardInfoStore();

    useEffect(() => {
        creaditCardInfoState.loadData(cardNumber);
    }, []);

    return (
        <div>123</div>
    );
};

export const CreditCardModal = () => {
    Modal.info({
        title: 'Creadit card information',
        content: <CreaditCardInfo cardNumber={'15464321'} />,
        footer: null
    });
};