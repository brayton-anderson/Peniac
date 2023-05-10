import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="1080"
      height="720"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&controls=0&showinfo=0&autohide=1&loop=1&mute=1`}
      frameBorder="0"
      allow="autoplay;"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;