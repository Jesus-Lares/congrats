"use client";
import { useEffect, useMemo, useState } from "react";

import {
  AfterCongratulations,
  BeforeCongratulations,
  Flower,
} from "@/core/components";
import { calculateRemainingTime } from "@/core/utils";

import S from "./page.module.scss";

const congratulationDay = "2023-08-26";

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const showData = !!searchParams?.show;
  const [animationFlower, setAnimationFlower] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setAnimationFlower(S.active), 200;
    });
  }, []);

  const congratulation = useMemo(() => {
    const remainingTime = calculateRemainingTime(congratulationDay);
    if (!remainingTime) return null;
    const alreadyPassed = remainingTime < 0;
    return { alreadyPassed, remainingTime };
  }, []);

  if (congratulation && !showData)
    return congratulation.alreadyPassed ? (
      <AfterCongratulations days={congratulation.remainingTime} />
    ) : (
      <BeforeCongratulations days={congratulation.remainingTime} />
    );

  return (
    <div className={S.container}>
      <div className={animationFlower}>
        <h3>¿Cuántas maneras existirán para regalar una rosa?</h3>
        <Flower />
      </div>
    </div>
  );
}
