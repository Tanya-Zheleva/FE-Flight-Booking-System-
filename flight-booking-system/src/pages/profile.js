import Layout from "antd/es/layout/layout"
import PageHeader from "../lib/header"
import PageFooter from "../lib/footer"

export const ProfilePage = (props) => {
    return (
        <Layout className="profile-page">
            <PageHeader />
            <Layout.Content>
                profile here
            </Layout.Content>
            <PageFooter />
        </Layout>
    )
}