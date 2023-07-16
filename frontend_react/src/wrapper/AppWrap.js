import React from "react";
import { NavigationDots, SocialMedia } from "../components";
import { useTranslation } from "react-i18next";
import format from 'date-fns/format';

const AppWrap = (Component, idName, classNames) =>
    function HOC() {
        const { t } = useTranslation();
        const currentDate = format(new Date(), 'yyyy');
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                {/* <SocialMedia /> */}
                <div className="app__wrapper app__flex">
                    <Component />

                    <div className="copyright">
                        <p className="p-text">@{currentDate} Ruri</p>
                        <p className="p-text">{t("copyright")}</p>
                    </div>
                </div>
                {/* <NavigationDots active={idName} /> */}
            </div>
        );
    };

export default AppWrap;
