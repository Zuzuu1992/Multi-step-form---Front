import styled from "styled-components";
import { usePlanStore } from "../store/usePlanStore";

interface RectangleProps {
  $active: boolean;
}

function PlanToggle() {
  const { period, togglePeriod } = usePlanStore();

  const handlePeriod = () => {
    togglePeriod();
  };

  return (
    <PlanDurationBox>
      <TimeSwitchBox>
        <Month $active={period}>Monthly</Month>
        <Rectangle onClick={handlePeriod} $active={period}>
          <Circle $active={period}></Circle>
        </Rectangle>
        <Year $active={!period}>Yearly</Year>
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

const Rectangle = styled.div<RectangleProps>`
  display: flex;
  align-items: flex-start;
  width: 38px;
  height: 20px;
  border-radius: 10px;
  background-color: var(--marineBlue);
  position: relative;
  padding: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

const Circle = styled.div<RectangleProps>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: var(--white);
  transform: ${({ $active }) => ($active ? "translateX(145%)" : "none")};
  position: absolute;
`;

const Month = styled.p<RectangleProps>`
  color: ${({ $active }) =>
    $active ? "var(--grey, #9699aa)" : "var(--marineBlue)"};
  text-align: right;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Year = styled.p<RectangleProps>`
  color: ${({ $active }) =>
    $active ? "var(--grey, #9699aa)" : "var(--marineBlue)"};
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
