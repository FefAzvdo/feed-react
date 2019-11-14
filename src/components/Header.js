import React from "react";

const Header = ({ picture, author, time }) => {
    return (
        <div className="header_wrapper">
            <div style={{ flex: 1 }}>
                <img src={picture} alt="Foto de Perfil" className="profile_image" />
            </div>
            <div style={{ flex: 8 }}>
                <p className="header_author">{author}</p>
                <p className="header_time_ago">{time} minutes ago</p>
            </div>
        </div>
    );
};

export default Header;
