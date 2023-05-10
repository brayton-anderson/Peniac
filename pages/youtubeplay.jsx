import React from "react";
import PropTypes from "prop-types";
import styles from '../styles/homer.module.css'

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles.youtubeContainer}>
    {/* <iframe width="942" height="530" src="https://www.youtube.com/embed/la3EJi-bLQ0" title="videoBg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
    <iframe
      id="frames"
     width="100vw"
      height="100vh"
      src={`https://www.youtube.com/embed/la3EJi-bLQ0?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1`}
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; looped; no-controls; controls-none encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen
      //frameBorder="0"
      //allow="autoplay; autohide=1; loop=1; controls=0; showinfo=0; muted"
    //   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;