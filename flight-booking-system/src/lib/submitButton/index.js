import { Button, Form } from "antd";
import React, { useEffect, useState } from "react";

const SubmitButton = ({ form, onClick }) => {
    const [disabled, setDisabled] = useState(true);

    const dependantFields = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true })
            .then(values => {
                setDisabled(false);
            })
            .catch(errors => {
                setDisabled(true);
            });

    }, [dependantFields])

    return (
        <Button onClick={onClick} disabled={disabled}>
            Submit
        </Button>
    );
}

export default SubmitButton;