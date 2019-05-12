import * as React from "react";
import classnames from "classnames";
import Spinner from "react-spinkit";

import "./Video.scss";

interface VideoProps {
  id: string;
  className?: string;
}

const Video = (props: VideoProps) => {
  const opts = {
    width: "100%",
    height: "400px",
    src: `https://www.youtube-nocookie.com/embed/${props.id}?rel=0&modestbranding=1&showinfo=0`,
    allow:
      "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
      frameborder: 0
  };

  return (
    <div className={classnames("video__container", props.className)}>
      <iframe {...opts} />
    </div>
  );
};

export default Video;
