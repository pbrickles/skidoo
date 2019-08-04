import React from "react";
import classnames from "classnames";

export interface FiftyFiftyProps {
  side?: "left" | "right";
  className?: string;
}

const FiftyFifty: React.FC<FiftyFiftyProps> = ({
  side,
  className,
  children,
}) => {
  return (
    <div
      className={classnames(
        side ? `fifty-fifty__${side}` : "fifty-fifty",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FiftyFifty;
