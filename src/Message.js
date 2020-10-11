import React from 'react'
import "./Message.css";
import Avatar from '@material-ui/core/Avatar';

function Message() {
    return (
        <div className="msg">
            <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQEetUn8vqhqXQ/profile-displayphoto-shrink_200_200/0?e=1605139200&v=beta&t=D8nGLfU3_YdYn2JU_0HRd8KmwxNSjDAgcaDcOkUrDlY" />
            <div className="msg_info">
                <h4>Test User <span className="msg_timestamp">TimeStamp</span></h4>

                <p>This is a message!!</p>
            </div>
        </div>
    )
}

export default Message
