// import { useCounterStore } from "../store/useNumber";
import styled from "styled-components";
import React from "react";

interface ButtonProps {
  formRef: React.RefObject<HTMLFormElement>;
}

const NextStep: React.FC<ButtonProps> = ({ formRef }) => {
  return (
    <Next>
      <NextBtn
        onClick={() => {
          if (formRef.current) {
            formRef.current.dispatchEvent(new Event("submit")); // Trigger form submission
          }
        }}
        type="submit"
      >
        Next Step
      </NextBtn>
    </Next>
  );
};

export default NextStep;

const Next = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  /* justify-content: space-between;
  align-items: center; */
  width: 100%;
  padding: 16px;
`;

// const Back = styled.div`
//   color: var(--coolGrey);
//   font-family: Ubuntu;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
// `;

const NextBtn = styled.button`
  background-color: var(--white);
  padding: 12px 16px;
  border-radius: 4px;
  background: var(--marineBlue);
  color: var(--white, #fff);
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`;
