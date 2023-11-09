import React from "react";
import PropTypes from "prop-types"

const Youtube = ({embedId,x,y}) => (
    <div className = "flex justify-center">
    <iframe
      width={x}
      height={y}
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allowFullScreen
    />
    </div>
);

Youtube.propTypes = {
    embedId: PropTypes.string.isRequired
};

export default Youtube;