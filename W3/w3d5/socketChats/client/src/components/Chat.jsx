//What do we need? socket.io-client, useEffect, useState
import React, {useEffect, useState} from 'react'
import io from 'socket.io-client'


const Chat = () => {
    //State Variables?
    const [approve, setApprove] = useState(false)
    const [username, setUsername] = useState('')
    const [input, setInput] = useState('')
    const [messages, setMessages] = useState([])

    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        console.log('Is this running?');
        socket.on('post chat', (msg) => {setMessages(prevMsgState => [...prevMsgState, msg]) } );
        return () => socket.removeAllListeners;
      }, [socket]);

      const usernameHandler = (e) => {
        e.preventDefault()
        // console.log("This is our usernameHandler." + username)
        if(username){
            setApprove(true)
        }
      }

      const onSubmitHandler = (e) => {
        e.preventDefault()
        socket.emit("chat", {username: username, content: input})
        setInput("")
      }

      const renderChat = () => {
        return messages.map((msg, i) => (<p key={i}>{msg.username}: {msg.content}</p>))
      }

  return (
    <div>
        <h1>Socket.io Chat</h1>
        {
            !approve ?
            <div className='card'>
                <div className='name-field'>
                    <form onSubmit={usernameHandler}>
                        <input type="text" className='form-inline' placeholder='Enter your Username' onChange={e => setUsername(e.target.value)} value={username} />
                        <br />
                        <button className='btn btn-outline-dark mt-3'>Enter Chat</button>
                    </form>
                </div>
            </div>
            :
            <div className='card'>
                <form onSubmit={onSubmitHandler}>
                    <input type="text" className='form-inline' name='msg' onChange={e => setInput(e.target.value)} value={input} placeholder='Send a Message' />
                    <br />
                    <button className='btn btn-outline-dark mt-3'>Send Message</button>
                </form>
                <div>
                    <hr />
                    <h1>Messages</h1>
                    {renderChat()}
                </div>
            </div>

        }
    </div>
  )
}

export default Chat