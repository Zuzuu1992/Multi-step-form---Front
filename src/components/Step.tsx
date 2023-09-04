import styled from "styled-components";

function Step() {
  return (
    <Chapter>
      <Title>Personal info</Title>
      <Instruction>
        Please provide your name, email address, and phone number.
      </Instruction>
    </Chapter>
  );
}

export default Step;

const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin-bottom: 22px;
`;

const Title = styled.div`
  color: var(--marineBlue);
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Instruction = styled.div`
  color: var(--coolGrey);
  font-feature-settings: "clig" off, "liga" off;
  /* Body (L) */
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
`;
