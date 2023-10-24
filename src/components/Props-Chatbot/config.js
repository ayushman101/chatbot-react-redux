import React from 'react';

import {createChatBotMessage} from 'react-chatbot-kit';

const config= {
	botName: "HappilyEverBot",
	initialMessages: [
		createChatBotMessage("Hello, Welcome to HappilyEver Help chat"),
	],
	
	customComponents: {
		header: () => <div style={{fontWeight: "bolder", color: "darkblue", fontFamily: " American TypeWriter, serif", padding: "5px", borderRadius: "3px" }}>HappilyEver</div>,
		
	},

}

export default config;
