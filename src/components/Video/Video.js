import React from "react"

const Video = (props) => {
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${props.id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={props.id}
    />
  )
}

export default Video;
