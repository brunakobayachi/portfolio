import React from "react";

const NavigationDots = ({ active }) => {
    return (
        <div className="app__navigation">
            {["home", "sobre", "projetos", "habilidades", "contato"].map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className="app__navigation-dot"
                    style={active === item ? {backgroundColor: '#6D1EAB'}: { }}
                />
            ))}
        </div>
    );
};

export default NavigationDots;
