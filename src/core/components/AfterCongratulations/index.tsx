"use client";
import { FC, memo, useEffect, useState } from "react";

import S from "./styles.module.scss";

interface Props {
  title?: string;
  subtitle?: string;
  days?: number;
}

const AfterCongratulations: FC<Props> = ({ days = 0 }) => {
  const [animation, setAnimation] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAnimation(S.active), 200;
    });
  }, []);

  return (
    <div className={`${S.container} ${animation}`}>
      <div className={S.details}>
        <h1>Oops</h1>
        <p>Ya paso tu momento para recibir tus felicitaciones.</p>
        <p>Vuelve en {Math.abs(days)} dias.</p>
      </div>
      <svg width="400" height="400">
        <circle cx="200" cy="200" r="50" style={{ fill: "#FF5851" }}>
          <animate
            attributeName="r"
            attributeType="XML"
            values="50;80;50"
            begin="0s"
            dur="2s"
            fill="remove"
            repeatCount="indefinite"
          ></animate>
          <animate
            attributeName="fill-opacity"
            attributeType="CSS"
            values="1;.6;1"
            begin="0s"
            dur="2s"
            fill="remove"
            repeatCount="indefinite"
          ></animate>
        </circle>
      </svg>
    </div>
  );
};

export default memo(AfterCongratulations);
