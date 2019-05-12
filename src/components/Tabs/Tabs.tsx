import * as React from "react";
import classnames from "classnames";

import { BandContent } from "../../content/band";
import { TabsProps } from "./Interfaces/props";

import "./Tabs.scss";

const Tabs: React.FC<TabsProps> = props => {
  const { content } = props;
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <div className="tabs__container">
      <div className="tabs__inner">
        <div className="tabs__tabs-labels">
          {content.map((item: BandContent, i: number) => (
            <div
              key={`label_${i}`}
              className={classnames(
                "tabs__label",
                i === tabIndex ? "tabs__label--active" : undefined
              )}
              onClick={() => setTabIndex(i)}
            >
              <h3>{item.label}</h3>
            </div>
          ))}
        </div>
        <div className="tabs__content fifty-fifty">
          <div className="tabs__content-image fifty-fifty-left">
            <img src={content[tabIndex].image} alt={content[tabIndex].label} />
          </div>
          <div className="tabs__content-text fifty-fifty-right">{content[tabIndex].content}</div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
