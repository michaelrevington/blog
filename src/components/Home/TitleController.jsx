import { useTrail, a } from "@react-spring/web";
import React, { useMemo } from "react";
import "../../styles/title.css";

const TitleController = ({ children }) => {
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const trails = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { height: 0, opacity: 0 },
    to: { height: 100, opacity: 1 },
  });

  return trails.map((props, index) => (
    <a.div key={index} style={props}>
      {items[index]}
    </a.div>
  ));
};

export default TitleController;
