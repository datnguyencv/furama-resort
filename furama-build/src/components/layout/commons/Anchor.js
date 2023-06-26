import React from "react";
import PropTypes from "prop-types";

export function Anchor(props) {
  const { children } = props;
  return <a {...props}>{children}</a>;
}

Anchor.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
