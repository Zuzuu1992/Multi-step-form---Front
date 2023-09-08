// import { useNumber } from "../store/useNumber";
import styled from "styled-components";
// import { persist, devtools } from "zustand/middleware";
// import nextStep from "./NextStep";
import { useCounterStore } from "../store/useNumber";

function Pagination() {
  // const { step, nextStep } = useNumber();
  const { count, increment, decrement } = useCounterStore();
  // const step = useNumber((state) => state.step);

  return (
    <NumberBox>
      {Array.from({ length: 4 }).map((_, index) => (
        <Number key={index} className={count === index ? "active" : ""}>
          {index + 1}
        </Number>
      ))}
    </NumberBox>
  );
}

export default Pagination;

const NumberBox = styled.div`
  display: flex;
  column-gap: 16px;
`;

const Number = styled.button`
  border-radius: 50%;
  height: 33px;
  width: 33px;
  border: 1px solid white;
  background-color: transparent;
  color: var(--white);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
