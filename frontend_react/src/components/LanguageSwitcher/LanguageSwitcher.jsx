import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { images } from "../../constants";

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState("en");

    function toggleLanguage() {
        language == "en" ? setLanguage("pt_BR") : setLanguage("en");
        return i18n.changeLanguage(language);
    }

    return (
        <div>
            <div onClick={() => toggleLanguage()}>
                <img
                    className="flag-img"
                    alt={`flag-${language}`}
                    src={language == "en" ? images.brazil : images.usa}
                />
            </div>
        </div>
    );
}

export default LanguageSwitcher;
