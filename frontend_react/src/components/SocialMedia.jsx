import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://www.linkedin.com/in/brunakobayachi/">
                    <BsLinkedin />
                </a>
            </div>
            <div>
                <a href="https://www.instagram.com/brunakobayachi/">
                    <BsInstagram />
                </a>
            </div>
            <div>
                <a href="https://github.com/brunakobayachi">
                    <BsGithub />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;
