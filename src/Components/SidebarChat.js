import React from 'react';
import '../sideBar.css';
import {Avatar} from '@material-ui/core'
function SidebarChat(props) {
    return (
        <div className="sidebar_Chat">
            <Avatar/>
            <div className="chatInfo">
                <h2>Room Names</h2>
                <p>This is the last message</p>
            </div>
        </div>
    );
}

export default SidebarChat;