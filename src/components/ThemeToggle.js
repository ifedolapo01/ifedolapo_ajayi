'use client';

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/ThemeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default ThemeToggle;