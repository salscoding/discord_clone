import React, { useEffect, useState } from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Sidebar.css'
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from "./firebase";
import axios from './axios'
import Pusher from 'pusher-js'


const pusher = new Pusher('ee9a0e1d27cdaabdec0a', {
  cluster: 'ap1'
});

function Sidebar() {
  const user = useSelector(selectUser);
  const [channels, setChannels] = useState([]);

  const getChannels = () => {
    axios.get('/get/channelList').then((res) => {
      setChannels(res.data)
    })
  }

  useEffect(() => {
    // // Firebase Codes
    // db.collection('channels').onSnapshot(snapshot => (
    //   setChannels(snapshot.docs.map(doc => ({
    //     id: doc.id,
    //     channel: doc.data(),
    //   })))

    // ))
    getChannels()
    const channel = pusher.subscribe('channels');
    channel.bind('newChannel', function (data) {
      getChannels()
    });
  }, []);

  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");
    // if (channelName) {
    //   db.collection('channels').add({
    //     channelName: channelName,
    //   });
    // }
    if (channelName) {
      axios.post('/new/channel', {
        channelName: channelName
      })
    }
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <h3>Discord Clone</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar_channels">
        <div className="sidebar_channelsHeader">
          <div className="sidebar_header">
            <ExpandMoreIcon />
            <h4>Channels</h4>
          </div>
          <AddIcon onClick={handleAddChannel} className="sidebar_addChannel" />
        </div>
        <div className="sidebar_channelsList">
          {channels.map(channel => (
            <SidebarChannel key={channel.id} id={channel.id} channelName={channel.name} />
          ))}
        </div>
      </div>
      <div className="sidebar_voice">
        <SignalCellularAltIcon
          className="sidebar_voiceIcon"
          fontSize="large"
        />
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
        <Avatar src={user.photo} />
        <div className="sidebar_profileInfo">
          <h3>{user.displayName}</h3>
          <p>#{user.uid.substring(0, 5)}</p>
        </div>
        <div className="sidebar_profileIcons">
          <ExitToAppIcon onClick={() => auth.signOut()} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
