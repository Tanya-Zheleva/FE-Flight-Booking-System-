import React from "react"
import './styles.css';
import { AppBar, Icon, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

const PageHeader = (props) => {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Icon>
                    <ConnectingAirportsIcon classes="page-logo" />
                </Icon>
                <Typography sx={{ flexGrow: 1 }} variant="h6" component="div" classes="page-title"> Fligh Booking Site Name </Typography>
                <IconButton classes="page-menu"
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>

    )
}

export default PageHeader;
