import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import {ThemeProvider } from '@material-ui/core/styles';
import {theme} from './styled'

import {HeaderSection} from './styled'


export default function Header(props) {

    switch (props.render) {
        case "home":
            return (
                <ThemeProvider theme={theme}>
                    <HeaderSection>
                        <div className="logo-chat">
                            <IconButton id="conf-home" onClick={() => props.renderPag("setting")}><SettingsRoundedIcon fontSize="large" color="primary" /></IconButton>
                            <h3>astroMatch</h3>
                            <IconButton onClick={() => props.renderPag("chat")}><ChatBubbleOutlineIcon fontSize="large" color="secondary" /></IconButton>
                        </div>
                    </HeaderSection>
                </ThemeProvider>
            )
        case "chat":
        case "setting":
            return (
                <ThemeProvider theme={theme}>
                    <HeaderSection>
                        <div className="chat-logo">
                            <IconButton onClick={() => props.renderPag("home")}><SupervisorAccountIcon fontSize="large" color="primary"/></IconButton>
                            <h3>astroMatch</h3>
                            {/* <IconButton onClick={() => props.renderChat(true)}><SettingsRoundedIcon fontSize="large" color="secondary"/></IconButton> */}
                        </div>
                    </HeaderSection>
                </ThemeProvider>
            )   
        default:
            break;
    }
}