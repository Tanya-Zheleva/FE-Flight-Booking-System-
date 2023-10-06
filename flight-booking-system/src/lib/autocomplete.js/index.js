import React, { useState } from "react"
import { AutoComplete as AntAutoComplete } from "antd";
import Highlighter from "react-highlight-words";
import './styles.css';

const AutoComplete = ({ label, options = [], filterOption }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (value) => {
        setSearchText(value);
    };

    return (
        <>
            {label}
            <AntAutoComplete options={options} filterOption={filterOption} onSearch={handleSearch}>
                {options.map(option => {
                    return (
                        <AntAutoComplete.Option key={option.id}>
                        <Highlighter
                            highlightClassName='highlight'
                            searchWords={[searchText]}
                            autoEscape={true}
                            textToHighlight={option.value}
                        />
                        </AntAutoComplete.Option>
                    );
                })}
            </AntAutoComplete>
        </>
    );
}

export default AutoComplete;