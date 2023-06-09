import React from 'react'

const MessageHistory = (props) => {
  return (
    <div>
        <fieldset>
            <legend>Message History</legend>
            {
                props.messageArray.map((itcabeanythingyouwant, i) => {
                    return <div key={i}>
                        {itcabeanythingyouwant}
                    </div>
                })
            }        
        </fieldset>
    </div>
  )
}

export default MessageHistory