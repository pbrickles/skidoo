import React from "react";
import { Link } from "gatsby";

export interface CtaProps {
  externalLink: boolean | false;
  to: string;
  target: "_blank" | "_self";
  children: any;
}

const Cta = (props: CtaProps) => {
  const { externalLink, to, target, children } = props;
  if (externalLink) {
    return (
      <a href={to} target={target} className="cta">
        {children}
      </a>
    );
  }
  return <Link to={to} className="cta">{children}</Link>;
};

export default Cta;
