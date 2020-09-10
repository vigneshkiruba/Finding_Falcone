import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./style.module.css";

export default function Loading({ color, className, style, size, flag }) {
  const circles = [...Array(3)].map((_, index) => (
    <div key={index} style={{ background: `${color}` }}></div>
  ));
  const eclipse = [...Array(4)].map((_, index) => (
    <div key={index} style={{ background: `${color}` }} />
  ));
  return (
    <div>
      {flag === 2 ? (
        <div
          className={classNames(styles["lds-ellipsis"], className)}
          style={{ ...style, width: size, height: size }}
        >
          {eclipse}
        </div>
      ) : (
        <div
          className={classNames(styles["lds-Loading"], className)}
          style={{ width: size, height: size, ...style }}
        >
          {circles}
        </div>
      )}
    </div>
  );
}

Loading.propTypes = {
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.number,
  flag: PropTypes.number,
};

Loading.defaultProps = {
  color: "#7f58af",
  className: "",
  style: {},
  size: 80,
  flag: 1,
};
