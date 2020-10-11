import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Avatar from '@material-ui/core/Avatar';
import HeadsetIcon from '@material-ui/icons/Headset';
import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
        <div class="sidebar">
            <div class="sidebar_top">
                <h3>Discord Clone</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar_channels">
                <div className="sidebar_channels_header">
                    <div className="sidebar_header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar_addChannel" />
                </div>
                <div className="sidebar_channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>
            <div className="sidebar_voice">
                <SignalCellularAltIcon className="sidebar_voiceIcon" fontSize="large" />
                <div className="sidebar_voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar_voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar_profile">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEetUn8vqhqXQ/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=D8nGLfU3_YdYn2JU_0HRd8KmwxNSjDAgcaDcOkUrDlY" />
                <div className="sidebar_profileInfo">
                    <h3>@Salman F Rahman</h3>
                    <p>#SalsCoding</p>
                </div>
                <div className="sidebar_profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;