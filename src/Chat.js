import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import Message from './Message';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader />

            <div className="chat_msg">
                <Message />
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input placeholder={'Message #Youtube'} />
                    <button className="chat_inputButton" type="submit">Send Message</button>
                </form>

                <div className="chat_inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
    );
}

export default Chat;
