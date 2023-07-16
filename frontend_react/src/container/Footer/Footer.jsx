import React from "react";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    //     message: "",
    // });
    // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    // const [loading, setLoading] = useState(false);

    // const { name, email, message } = formData;

    // const handleChangeInput = e => {
    //     const { name, value } = e.target;

    //     setFormData({ ...formData, [name]: value });
    // };

    // const handleSubmit = () => {
    //     setLoading(true);

    //     const contact = {
    //         _type: "contact",
    //         name: name,
    //         email: email,
    //         message: message,
    //     };

    //     client.create(contact).then(res => {
    //         setLoading(false);
    //         setIsFormSubmitted(true);
    //     });
    // };

    return (
        <>
            <h2 className="head-text">{t("talk")}</h2>

            <div className="app__footer-cards">
                <div className="app__footer-card">
                    <img src={images.email} alt="email" />
                    <a
                        href="mailto:brunakobayachi@gmail.com"
                        className="p-text">
                        brunakobayachi@gmail.com
                    </a>
                </div>
                <div className="app__footer-card">
                    <img src={images.mobile} alt="mobile" />
                    <a href="https://wa.me/5567981657244" className="p-text" target="_blank">
                        +55 (67) 981657244
                    </a>
                </div>
            </div>

            {/* {!isFormSubmitted ? (
                <div className="app__footer-form app__flex">
                    <div className="app__flex">
                        <input
                            className="p-text"
                            name="name"
                            type="text"
                            placeholder={t("name")}
                            value={name}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            name="email"
                            type="email"
                            placeholder={t("email")}
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder={t("message")}
                            value={message}
                            onChange={handleChangeInput}
                            name="message">    
                        </textarea>
                    </div>
                    <button
                        type="button"
                        className="p-text"
                        onClick={handleSubmit}>
                        {loading ? t("sending") : t("send")}
                    </button>
                </div>
            ) : (
                <div>
                    <h3 className="head-text">
                        {t("thanks")}
                    </h3>
                </div>
            )} */}
        </>
    );
};

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    'contact',
    "app__whitebg"
);
