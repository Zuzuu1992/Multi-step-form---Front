import Pagination from "../components/Pagination";
import styled from "styled-components";
import Plan from "../components/Plan";
import useActivePage from "../store/useActivePage";
import { useNavigate } from "react-router-dom";
import { useSelectedPlanStore } from "../store/useSelectedPlanStore";
import Background from "../assets/bg-sidebar-mobile.svg";
import { useEffect, useState } from "react";
import { usePlanStore } from "../store/usePlanStore";

interface RectangleProps {
  $active: boolean;
}

function SelectPlan() {
  const activePage = useActivePage((state) => state.activePage);
  const { selectedOption } = useSelectedPlanStore();
  const { period, togglePeriod } = usePlanStore();
  const navigate = useNavigate();

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextClick = () => {
    if (selectedOption) {
      navigate("/pick");
    } else {
      alert("Please select a plan before proceeding.");
    }
  };

  const handleBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <Option>
        <Process>
          <Pagination activePage={activePage} />
          <Card>
            <Chapter>
              <Title>Select your plan</Title>
              <Instruction>
                You have the option of monthly or yearly billing.
              </Instruction>
            </Chapter>
            <Plan />
            {isDesktop && (
              <Next $active={period}>
                <Back onClick={handleBackClick}>Go Back</Back>
                <NextBtn onClick={handleNextClick} type="submit">
                  Next Step
                </NextBtn>
              </Next>
            )}
          </Card>
        </Process>
        {!isDesktop && (
          <Next $active={period}>
            <Back onClick={handleBackClick}>Go Back</Back>
            <NextBtn onClick={handleNextClick} type="submit">
              Next Step
            </NextBtn>
          </Next>
        )}
      </Option>
    </>
  );
}

export default SelectPlan;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
  position: relative;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 30%;
  @media (min-width: 1440px) {
    background-image: none;
    background: var(--White, #fff);
    height: 600px;
    padding: 16px;
    border-radius: 15px;
    align-items: stretch;
  }
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
  /* padding: 34px 16px; */
  padding: 34px 16px 82px 16px;
  width: 100%;
  @media (min-width: 1440px) {
    flex-direction: row;
    column-gap: 0px;
    align-items: flex-start;
    padding: 0;
    height: 100%;
    justify-content: center;
    width: auto;
  }
`;

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
  width: 100%;
  /* margin-bottom: 20px;  */
  @media (min-width: 1440px) {
    padding: 40px 100px 32px 100px;
    box-shadow: none;
    height: 100%;
    width: 72%;
  }
`;

const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin-bottom: 22px;
  @media (min-width: 1440px) {
    margin-bottom: 35px;
    row-gap: 11px;
  }
`;

const Title = styled.div`
  color: var(--marineBlue);
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 1440px) {
    font-size: 32px;
  }
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

const Next = styled.div<RectangleProps>`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  @media (min-width: 1440px) {
    position: static;
    padding: 0px;
    margin-top: ${({ $active }) => ($active ? "89px" : "116px")};
  }
`;

const Back = styled.div`
  color: var(--coolGrey);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: var(--Denim, #022959);
  }
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

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
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #164a8a;
  }
  @media (min-width: 1440px) {
    border-radius: 8px;
    font-size: 16px;
    padding: 14px 24px;
    width: 123px;
    align-self: flex-end;
    /* margin-top: 92px; */
  }
`;
