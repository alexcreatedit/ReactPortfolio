import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStackOverflow,
    faGithub,
    faLinkedin,
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div class="social-container">
    <h3>Social Follow</h3>
    <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
</div>
  );
}