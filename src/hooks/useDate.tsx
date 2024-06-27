"use client";
import { useState } from "react";

export const useDate = () => {
  const [today] = useState(new Date());

  const day = today.getDay();
  const date = today;

  return {
    day,
    date,
  };
};
