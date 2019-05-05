import React from "react"
import YouTube from "react-youtube"

interface VideoProps {
  id: string;
}

const Video = (props: VideoProps) => {
  const opts = {
    playerVars: {
      
    },
  }

  return <YouTube videoId={props.id} opts={opts} />
}

export default Video
