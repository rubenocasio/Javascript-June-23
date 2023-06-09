import React, { useState } from 'react';

const MessageForm = (props) => {
    //Declaring state variable and setter function
    const [msg, setMsg] = useState("");
    

    const handleSubmit = (e) => {
        e.preventDefault();
        // what should we do with the message?
        props.anythingyouwanttobeinlifeyoucan(msg)
        setMsg("")
    };
    
    return (
        <form onSubmit={ handleSubmit }>
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
                <br></br>
            <input type="submit" value="Send Message" />
        </form>
    );
};
    
export default MessageForm;