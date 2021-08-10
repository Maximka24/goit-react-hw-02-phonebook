import React from "react";
import PropTypes from "prop-types";
import s from "./Section.module.css";

const Section = ({ children }) => <div className={s.Section}>{children}</div>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
