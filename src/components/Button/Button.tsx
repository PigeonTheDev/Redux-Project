import React from "react";
import "./Button.css";

interface IButton {
  text: string;
  bgcolor: string;
  color: string;
  disabledbtn?: boolean;
  onclick: () => void;
}

export const Button: React.FC<IButton> = ({ text, bgcolor, color, disabledbtn, onclick }) => {
  return (
    <>
      <button className="btn" disabled={disabledbtn} style={{ backgroundColor: `${bgcolor}`, color: `${color}` }} onClick={onclick}>
        {text}
      </button>
    </>
  );
};
