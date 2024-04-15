"use client";
import { useEffect, useState } from "react";

export const useDate = () => {
  const [today, setDate] = useState(new Date());

  useEffect(() => {
    setDate(new Date());
  }, []);

  const day = today.getDay();
  const date = today;

  return {
    day,
    date,
  };
};
