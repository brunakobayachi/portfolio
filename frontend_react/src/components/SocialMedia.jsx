import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <a href="https://www.linkedin.com/in/brunakobayachi/">
                <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/brunakobayachi/">
                <BsInstagram />
            </a>
            <a href="https://github.com/brunakobayachi">
                <BsGithub />
            </a>
        </div>
    );
};

export default SocialMedia;
