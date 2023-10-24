import React from 'react';

const MessageParser= ({actionProvider,state})=>{
	const parse= (message)=>{
		if(message.includes('Got it!')){
			actionProvider.HandleGotIt();
		}
	}
}

export default MessageParser
