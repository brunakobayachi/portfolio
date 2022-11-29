import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import "./Skills.scss";
import { useTranslation } from "react-i18next";

const Skills = () => {
    const { t } = useTranslation();
    const [experience, setExperience] = useState([]);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then(data => {
            setExperience(data);
        });
        client.fetch(skillsQuery).then(data => {
            setSkills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">
                {t("skills")} <span>&</span> {t("exp")}
            </h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills?.map((skill,index) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={index}>
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}>
                                <img
                                    src={urlFor(skill.icon)}
                                    alt={skill.name}
                                />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experience?.map((experience, index) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={index}>
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work, index) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={t(work.name)}
                                            key={index}>
                                            <h4 className="bold-text">
                                                {t(work.name)}
                                            </h4>
                                            <p className="p-text">
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={t(work.name)}
                                            effect="solid"
                                            arrowColor="'#fff"
                                            className="skills-tooltip">
                                            {t(work.desc)}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    'skills',
    "app__whitebg"
);
