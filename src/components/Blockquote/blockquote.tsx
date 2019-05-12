import * as React from "react";

import { BlockquoteProps } from "./interfaces/props";

import "./Blockquote.scss";

const Blockquote: React.FC<BlockquoteProps> = props => {
  const { quote, cite } = props;
  return (
    <blockquote>
      "{quote}"{cite && <cite>{cite}</cite>}
    </blockquote>
  );
};

export default Blockquote;
