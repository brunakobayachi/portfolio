import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./About.scss";
import { urlFor, client } from "../../client";
import { useTranslation } from "react-i18next";

const About = () => {
    const [abouts, setAbouts] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then(data => {
            setAbouts(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">
                {t("know")} <span>{t("development")}</span>
                <br />
                {t("means")} <span>{t("business")}</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className="app__profile-item"
                        key={t(about.title) + index}>
                        <img src={urlFor(about.imgUrl)} alt={t(about.title)} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {t(about.title)}
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            {t(about.description)}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(About, "app__about"),
    'about',
    "app__whitebg"
);
