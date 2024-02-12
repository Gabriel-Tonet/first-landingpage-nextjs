'use client'

import Styles from "./button.module.scss";

/* 
Props

title: String
kind: "primary"| "secundary"
*/

const Button = ({ title, kind, onClick, type }) => {
  const generationClassByKind = () => {
    if (kind === "secundary") return Styles.secundary;
    if (kind === "full") return Styles.full;

    return Styles.primary;
  }

  return <button
    className={`${Styles.button} ${generationClassByKind()}`}
    onClick={onClick}
    type={type}
  >
    {title}
  </button >
};

export default Button;
