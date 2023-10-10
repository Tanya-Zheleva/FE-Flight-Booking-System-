import React, { useState } from "react"
import { AutoComplete as AntAutoComplete } from "antd";
import Highlighter from "react-highlight-words";
import './styles.css';

const AutoComplete = (props) => {
    const { options = [], filterOption, onChange } = props;
    const [searchText, setSearchText] = useState('');

    const handleSearch = (value) => {
        setSearchText(value);
    };

    const onSelect = (value) => {
        onChange(value);
        setSearchText(value);
    }

    return (
        <AntAutoComplete options={options} filterOption={filterOption} onSearch={handleSearch} onSelect={onSelect}>
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
    );
}

export default AutoComplete;