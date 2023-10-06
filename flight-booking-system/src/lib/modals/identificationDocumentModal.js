import React, { useEffect } from "react";
import { useIdentificationDocumentInfoStore } from "../../store/identifinationDocumentInfoStore";
import { Modal } from "antd";

const IdentificationDocumentInfo = ({ id }) => {
    const identificationDocumentInfoState = useIdentificationDocumentInfoStore();

    useEffect(() => {
        identificationDocumentInfoState.loadData(id);
    }, []);

    return (
        <div>123</div>
    );
};

export const IdentificationDocumentInfoModal = () => {
    Modal.info({
        title: 'Identification document information',
        content: <IdentificationDocumentInfo id={'peshoid'} />,
        footer: null
    });
};