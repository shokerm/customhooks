import { useEffect, useState } from "react";
export const usePerson = (initialAge) => {
  const [age, setAge] = useState(initialAge);
  const [date, setDate] = useState(new Date().getTime());

  useEffect(() => {
    setDate(new Date().getTime());
  }, [age]);

  return { age, date, setAge };
};
