import React from 'react';
import {createClientMessage} from 'react-chatbot-kit'

const ActionProvider=({createChatBotMessage, setState})=>{

	const HandleGotIt= ()=>{
		const message=createClientMessage("Got it!");

		setState((prev)=>({
			...prev,
			messages:[...prev.messages,message],
		}));
	}

}

export default ActionProvider;
