import React from "react";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import SocialMedia from "../SocialMedia";
const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const { t } = useTranslation();

	return (
		<>
			<nav className="app__navbar">
				<div className="app__navbar-logo">
					<img src={images.logo} alt="logo" />
				</div>
				<ul className="app__navbar-links">
					{[
						{ name: t("home"), ref: "home" },
						{ name: t("about"), ref: "about" },
						{ name: t("works"), ref: "works" },
						{ name: t("skills"), ref: "skills" },
						{ name: t("contact"), ref: "contact" },
					].map(item => (
						<li className="app__flex p-text" key={`link-${item.ref}`}>
							<a href={`#${item.ref}`}>{item.name}</a>
							<div />
						</li>
					))}
				</ul>

				<div className="flag">
					<LanguageSwitcher />
				</div>

				<div className="app__navbar-menu-button">
					<HiMenuAlt4 onClick={() => setToggle(true)} />
				</div>
			</nav>
			<div className="social-nav">
				<SocialMedia />
			</div>
			{toggle && (
				<motion.div
					className="app__navbar-menu"
					whileInView={{ x: [300, 0] }}
					transition={{ duration: 0.85, ease: "easeOut" }}
				>
					<HiX onClick={() => setToggle(false)} />
					<ul>
						{[
							{ name: t("home"), ref: "home" },
							{ name: t("about"), ref: "about" },
							{ name: t("works"), ref: "works" },
							{ name: t("skills"), ref: "skills" },
							{ name: t("contact"), ref: "contact" },
						].map(item => (
							<li key={item.ref}>
								<a href={`#${item.ref}`} onClick={() => setToggle(false)}>
									{item.name}
								</a>
							</li>
						))}
					</ul>
					<div>
						<LanguageSwitcher className="flag-mobile" />
					</div>
				</motion.div>
			)}
		</>
	);
};

export default Navbar;
