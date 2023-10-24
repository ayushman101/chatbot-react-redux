import React from 'react';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './Props-Chatbot/ActionProvider';
import config from './Props-Chatbot/config';
import MessageParser from './Props-Chatbot/MessageParser'
import 'react-chatbot-kit/build/main.css'

const Chat=()=>{
	return (
		<div className="App">
		<div style={{maxwidth: "300px"}}>
			<Chatbot config={config}
				actionProvider={ActionProvider}
				messageParser={MessageParser}
			/>
		</div>
		</div>
	)
}

export default Chat;
