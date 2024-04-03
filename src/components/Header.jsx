// Header.js
import React from "react";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../redux/darkmodeslice";

const Header = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
    if (mode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <header>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>
      <Button
        onClick={handleDarkModeToggle}
      >
        <SettingsBrightnessOutlinedIcon />
      </Button>
    </header>
  );
};

export default Header;
