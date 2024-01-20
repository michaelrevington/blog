import { useTransition, a } from "@react-spring/web";
import React, { useMemo } from "react";
import { Col } from "reactstrap";

const ImageController = ({ children }) => {
  const items = useMemo(() => React.Children.toArray(children), [children]);
  const transisions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 1 },
    delay: 200,
  });

  return transisions((style, item) => (
    <Col className="d-flex justify-content-center align-items-center">
      <a.div
        className="mx-3 pb-2 bot-border-on-hover"
        style={{
          bottom: 100 + Math.random() * (window.innerHeight - 200),
          left: 100 + Math.random() * (window.innerWidth - 200),
          ...style,
        }}
      >
        {item}
      </a.div>
    </Col>
  ));
};

export default ImageController;
