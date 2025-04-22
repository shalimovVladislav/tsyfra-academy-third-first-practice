import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  title: string;
  content: string;
  onClick?: () => void;
  buttonText?: string;
}

export const Card: React.FC<CardProps> = ({ title, content, onClick, buttonText = "Click me" }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.content}>{content}</p>
      <button className={styles.button} onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};
