import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import React from 'react';
import './Login.css';

function Login() {
  const signIn = () => {
    // Google Sign In
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  }
  return (
    <div className="login">
      <div className="login_logo">
        <img src="https://upload.wikimedia.org/wikipedia/sco/9/98/Discord_logo.svg" alt="https://png2.cleanpng.com/sh/5552911a07d842037eb75cde280b9a4a/L0KzQYm3V8E3N6p8ipH0aYP2gLBuTfRqe5R0itY2bHBqf372jvxqdpYye9pqdD3mf773lgRmel5ue9H3cz36dbO0gwJwf6RqRdZyc3PygrW0lPhqdpxuhtk2NXK3dILshfJiPmI5TKg3N0e2QoO5V8cyPWQ2T6o5OES2Rom3U75xdpg=/kisspng-discord-logo-online-chat-computer-icons-web-browse-discord-thinking-5b4d1eeba61446.7732227715317808436803.png" />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
