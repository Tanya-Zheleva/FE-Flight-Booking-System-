import React from "react"
import './styles.css';
import { Layout } from "antd";
import { ReactComponent as Logo } from '../logo/logo.svg'

const PageHeader = (props) => {
    return (
        <Layout.Header className="page-header">
            <Logo />
            Header placeholder
        </Layout.Header>
    )
}

export default PageHeader;