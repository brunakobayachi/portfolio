import React from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const { t } = useTranslation();

    return (
        <>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={images.logo} alt="" />
                </div>
                <ul className="app__navbar-links">
                    {[
                        { name: t("home"), ref: 'home' },
                        { name: t("about"), ref: 'about' },
                        { name: t("works"), ref: 'works' },
                        { name: t("skills"), ref: 'skills' },
                        { name: t("contact"), ref: 'contact' },
                    ].map((item) => (
                        <li className="app__flex p-text" key={`link-${item}`}>
                            <a href={`#${item.ref}`}>{item.name}</a>
                            <div />
                        </li>
                    ))}
                </ul>

                <div className="app__navbar-language">
                    <LanguageSwitcher />
                </div>

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
                        {[
                            t("home"),
                            t("about"),
                            t("works"),
                            t("skills"),
                            t("contact"),
                        ].map(item => (
                            <li key={item}>
                                <a
                                    href={`#${item}`}
                                    onClick={() => setToggle(false)}>
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </>
    );
};

export default Navbar;
