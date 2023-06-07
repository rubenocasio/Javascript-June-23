import React, {useState} from 'react'

const VideoDetails = (props) => {

    const {title, hashtags} = props;
    //state variables
    //first argument: variable name (getter)
    //second argument: setter function
    const [likes, setLikes] = useState(0)
    const [views, setViews] = useState(props.views)

  return (
    <div>
        <fieldset>
            <legend><h1>Video Details</h1></legend>
            <h2>{title}</h2>
            <h3>{views}</h3>
            <button onClick={() => setViews(views + 1)}>Add Views</button>
            <h3>Hashtags: {hashtags}</h3>

            { hashtags.map((tag, idx) => {
                return (

                    <div key={idx}>#{tag}</div>
                
                )}) 
            }

            <button onClick={() => setLikes(likes + 1)}><span>{likes}</span></button>
        </fieldset>
    </div>
  )
}

export default VideoDetails