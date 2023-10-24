import React from 'react';
import {createClientMessage} from 'react-chatbot-kit'

const ActionProvider=({createChatBotMessage, setState,children})=>{

	const handleGotIt =()=>{
		const message=createClientMessage("Got It!");

		setState((prev)=>({
			...prev,
			messages:[...prev.messages,message],
		}));
	
		showCalenderOptions();
	}

	const showCalenderOptions= ()=>{
		const message= createChatBotMessage("Pick a Slot!",{
			widget: "calender",
		})

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
		handleGotIt,
		showCalenderOptions,
	  },
        });
      })}
    </div>
  );
}

export default ActionProvider;
