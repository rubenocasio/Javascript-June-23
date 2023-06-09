import React, {useState} from 'react'
import MessageForm from '../components/MessageForm';
import MessageDisplay from '../components/MessageDisplay';

import MessageHistory from '../components/MessageHistory';
const MessageBoard = () => {
    const [currentMsg, setCurrentMsg] = useState("There are no messages");
    const [messageArray, setMessageArray] = useState([])

    const youveGotMail = ( msg ) => {
        setCurrentMsg(msg);
    
        setMessageArray([...messageArray, msg])
      }

  return (
    <div>
    {/* {currentMsg} */}
    <MessageForm anythingyouwanttobeinlifeyoucan={ youveGotMail }/>

    <MessageDisplay message={ currentMsg } />

    <MessageHistory messageArray={messageArray}/>
    </div>
  )
}

export default MessageBoard