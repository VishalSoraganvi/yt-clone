import React, { useState } from "react";
import "./_header.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { MdNotifications } from "react-icons/md";
import { MdApps } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = ({ handleToggleSideBar }) => {
  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${input}`);
  };
  return (
    <div className="border border-dark header">
      <FaBars
        size={28}
        className="header__menu"
        onClick={() => handleToggleSideBar()}
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
        alt="yt logo"
        className="header__logo"
      />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={28} />
        </button>
      </form>
      <div className="header__icons">
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Header;
