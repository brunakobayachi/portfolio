import React from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="" />
                </div>
                <ul className="app__navbar-links">
                    {["home", "sobre", "projetos", "habilidades", "contato"].map(item => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                            <a href={`#${item}`}>{item}</a>
                            <div />
                        </li>
                    ))}
                </ul>

                <div className="app__navbar-menu-button">
                    <HiMenuAlt4 onClick={() => setToggle(true)} />
                </div>
            </nav>

            {toggle && (
                <motion.div
                    className="app__navbar-menu"
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: "easeOut" }}>
                    <HiX onClick={() => setToggle(false)} />
                    <ul>
                        {["home", "sobre", "trabalhos", "habilidades", "contato"].map(
                            item => (
                                <li key={item}>
                                    <a
                                        href={`#${item}`}
                                        onClick={() => setToggle(false)}>
                                        {item}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </motion.div>
            )}
        </>
        
    );
};

export default Navbar;
