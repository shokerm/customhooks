import { usePerson } from "./usePerson.js";

const Son1 = ({ name }) => {
  const { age, date, setAge } = usePerson(21); //21

  const handleAgeChange = () => {
    setAge(age + 1); //22
    setAge(age + 1); //22
    setAge(age + 1); //22
    setAge(age + 1); //22
    setAge(age + 1); //22
    setAge(age + 1); //22
    setAge(age + 1); //22
    setAge((oldAge) => oldAge + 1); // 22
    setAge((oldAge) => oldAge + 1); // 23
    setAge((oldAge) => oldAge + 1); // 24
    console.log(age);
  };

  return (
    <>
      <h3>Father: {name}</h3>
      <p>Age: {age}</p>
      <p>Date: {date}</p>
      <button onClick={handleAgeChange}>Increase</button>
    </>
  );
};
export default Son1;
