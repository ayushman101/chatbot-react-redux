import React from 'react';

import {createChatBotMessage} from 'react-chatbot-kit';
import Options from './Widgets/Options'

const config= {
	botName: "HappilyEverBot",
	initialMessages: [
		createChatBotMessage("Hello, Welcome to HappilyEver Help chat",{
			widget: "options",
		}),
		
	],
	
	customComponents: {
		header: () => <div style={{fontWeight: "bolder", color: "darkblue", fontFamily: " American TypeWriter, serif", padding: "5px", borderRadius: "3px" }}>HappilyEver</div>,
		
	},

	widgets: [
		{
			widgetName: "options",
			widgetFunc: (props) => <Options {...props} />,
		},
	],
}

export default config;
