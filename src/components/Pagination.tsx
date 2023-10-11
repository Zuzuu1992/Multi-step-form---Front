import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import BackgroundDesktop from "../assets/bg-sidebar-desktop.svg";
import { useEffect, useState } from "react";

interface PaginationProps {
  activePage: number;
}

function Pagination({ activePage }: PaginationProps) {
  const navigate = useNavigate();
  const location = useLocation();
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

  return (
    <>
      {isDesktop ? (
        <NumberBox>
          <DesktopWrapper>
            <Number
              style={{
                background: location.pathname === "/" ? "#bee2fd" : "none",
                color: location.pathname === "/" ? "#022959" : "white",
                border: location.pathname === "/" ? "none" : "1px solid white",
              }}
              onClick={() => {
                navigate("/");
              }}
            >
              1
            </Number>
            <StepTextBox>
              <StepNumber>STEP 1</StepNumber>
              <StepTiTle>YOUR INFO</StepTiTle>
            </StepTextBox>
          </DesktopWrapper>
          <DesktopWrapper>
            <Number
              style={{
                background: location.pathname === "/plan" ? "#bee2fd" : "none",
                color: location.pathname === "/plan" ? "#022959" : "white",
                border:
                  location.pathname === "/plan" ? "none" : "1px solid white",
              }}
              onClick={() => {
                navigate("/plan");
              }}
            >
              2
            </Number>
            <StepTextBox>
              <StepNumber>STEP 2</StepNumber>
              <StepTiTle>SELECT PLAN</StepTiTle>
            </StepTextBox>
          </DesktopWrapper>
          <DesktopWrapper>
            <Number
              style={{
                background: location.pathname === "/pick" ? "#bee2fd" : "none",
                color: location.pathname === "/pick" ? "#022959" : "white",
                border:
                  location.pathname === "/pick" ? "none" : "1px solid white",
              }}
              onClick={() => {
                navigate("/pick");
              }}
            >
              3
            </Number>
            <StepTextBox>
              <StepNumber>STEP 3</StepNumber>
              <StepTiTle>ADD-ONS</StepTiTle>
            </StepTextBox>
          </DesktopWrapper>
          <DesktopWrapper>
            <Number
              style={{
                background:
                  location.pathname === "/finish" ? "#bee2fd" : "none",
                color: location.pathname === "/finish" ? "#022959" : "white",
                border:
                  location.pathname === "/finish" ? "none" : "1px solid white",
              }}
              onClick={() => {
                navigate("/finish");
              }}
            >
              4
            </Number>
            <StepTextBox>
              <StepNumber>STEP 4</StepNumber>
              <StepTiTle>SUMMARY</StepTiTle>
            </StepTextBox>
          </DesktopWrapper>
        </NumberBox>
      ) : (
        <NumberBox>
          <Number
            style={{
              background: location.pathname === "/" ? "#bee2fd" : "none",
              color: location.pathname === "/" ? "#022959" : "white",
              border: location.pathname === "/" ? "none" : "1px solid white",
            }}
            onClick={() => {
              navigate("/");
            }}
          >
            1
          </Number>
          <Number
            style={{
              background: location.pathname === "/plan" ? "#bee2fd" : "none",
              color: location.pathname === "/plan" ? "#022959" : "white",
              border:
                location.pathname === "/plan" ? "none" : "1px solid white",
            }}
            onClick={() => {
              navigate("/plan");
            }}
          >
            2
          </Number>
          <Number
            style={{
              background: location.pathname === "/pick" ? "#bee2fd" : "none",
              color: location.pathname === "/pick" ? "#022959" : "white",
              border:
                location.pathname === "/pick" ? "none" : "1px solid white",
            }}
            onClick={() => {
              navigate("/pick");
            }}
          >
            3
          </Number>
          <Number
            style={{
              background: location.pathname === "/finish" ? "#bee2fd" : "none",
              color: location.pathname === "/finish" ? "#022959" : "white",
              border:
                location.pathname === "/finish" ? "none" : "1px solid white",
            }}
            onClick={() => {
              navigate("/finish");
            }}
          >
            4
          </Number>
        </NumberBox>
      )}
    </>
  );
}

export default Pagination;

const NumberBox = styled.div`
  display: flex;
  column-gap: 16px;
  @media (min-width: 1440px) {
    flex-direction: column;
    background-image: url(${BackgroundDesktop});
    background-size: 274px;
    background-repeat: no-repeat;
    padding: 40px 32px;
    row-gap: 32px;
    border-radius: 10px;
    flex-grow: 1;
    height: 100%;
  }
`;

const Number = styled.button`
  border-radius: 50%;
  height: 33px;
  width: 33px;
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`;

const DesktopWrapper = styled.div`
  display: flex;
  column-gap: 16px;
  align-items: center;
`;

const StepTextBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

const StepNumber = styled.div`
  color: var(--Light-Blue, #abbcff);
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StepTiTle = styled.div`
  color: var(--White, #fff);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
