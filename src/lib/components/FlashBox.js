import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { deleteflash } from "./../flasher";
import DefaultFlash from "./DefaultFlash";

export function FlashBox({ flashes, child, style }) {
  const flashesToShow = useMemo(
    () =>
      flashes.map((v, i) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            key: v.id,
            deleteFlash: deleteflash.bind(null, v.id),
            ...v,
          });
        } else {
          return <DefaultFlash key={v.id} {...v} />;
        }
      }),
    [flashes, child]
  );

  return (
    <React.Fragment>
      {flashes.length > 0 && (
        <div style={style} id="flash-box">
          {flashesToShow}
        </div>
      )}
    </React.Fragment>
  );
}

FlashBox.defaultProps = {
  flashes: [],
};

FlashBox.propTypes = {
  flashes: PropTypes.arrayOf(PropTypes.object),
  style:PropTypes.object,
  child: PropTypes.element
};

export default FlashBox;
