import React from "react"
import { AutoComplete as AntAutoComplete } from "antd"

//TODO: consider using context for options

const AutoComplete = ({ label, options }) => {
    return (
        <>
            {label}
            <AntAutoComplete options={options} />
        </>
    );
}

export default AutoComplete;