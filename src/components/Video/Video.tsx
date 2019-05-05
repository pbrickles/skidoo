import * as React from "react";
import classnames from "classnames";
import YouTube from "react-youtube";

import "./Video.scss";

interface VideoProps {
  id: string;
  className?: string;
}

const Video = (props: VideoProps) => {
  const opts = {
    width: "100%",
    height: "400px"
  };

  return (
    <div className={classnames("video__container", props.className)}>
      <YouTube videoId={props.id} opts={opts} />
    </div>
  );
};

export default Video;
