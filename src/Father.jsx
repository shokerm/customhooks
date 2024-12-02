import { usePerson } from "./usePerson.js";

const Father = ({ name }) => {
  const { age, date, setAge } = usePerson(57);
  return (
    <>
      <h3>Father: {name}</h3>
      <p>Age: {age}</p>
      <p>Date: {date}</p>
      <button onClick={() => setAge(age + 1)}>Increase</button>
    </>
  );
};
export default Father;
