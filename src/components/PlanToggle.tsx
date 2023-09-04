import styled from "styled-components";

function PlanToggle() {
  return (
    <PlanDurationBox>
      <TimeSwitchBox>
        <Month>Monthly</Month>
        <Rectangle>
          <Circle></Circle>
        </Rectangle>
        <Year>Yearly</Year>
      </TimeSwitchBox>
    </PlanDurationBox>
  );
}

export default PlanToggle;

const PlanDurationBox = styled.div`
  border-radius: 8px;
  background: var(--alabaster);
  padding-top: 13px;
  padding-bottom: 13px;
`;

const TimeSwitchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 24px;
`;

const Month = styled.p`
  color: var(--marineBlue);
  text-align: right;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Rectangle = styled.div`
  display: flex;
  align-items: flex-start;
  width: 38px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--marineBlue);
  position: relative;
  padding: 4px;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--white);
  position: absolute;
`;

const Year = styled.p`
  color: var(--grey, #9699aa);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
