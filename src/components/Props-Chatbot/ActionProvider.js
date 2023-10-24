import React from 'react';
import {createClientMessage} from 'react-chatbot-kit'

const ActionProvider=({createChatBotMessage, setState,children})=>{

	const HandleGotIt = ()=>{
		const message=createChatBotMessage("Hello, Its nice to meet you!");

		setState((prev)=>({
			...prev,
			messages:[...prev.messages,message],
		}));
	}

	return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
		HandleGotIt,
	  },
        });
      })}
    </div>
  );
}

export default ActionProvider;
