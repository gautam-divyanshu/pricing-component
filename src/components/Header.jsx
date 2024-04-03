import { useSelector, useDispatch } from "react-redux";
import SettingsBrightnessOutlinedIcon from "@mui/icons-material/SettingsBrightnessOutlined";
import { Button } from "@mui/material";
import { toggleDarkMode } from "../redux/darkmodeslice";

const Header = () => {
  const { mode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <header>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required.</p>

      <Button onClick={() => dispatch(toggleDarkMode())}>
        <SettingsBrightnessOutlinedIcon />
      </Button>
    </header>
  );
};

export default Header;
