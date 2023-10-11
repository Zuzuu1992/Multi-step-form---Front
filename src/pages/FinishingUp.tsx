import axios from "axios";
import Pagination from "../components/Pagination";
import styled from "styled-components";
import Finishing from "../components/Finishing";
import useActivePage from "../store/useActivePage";
import { useNavigate } from "react-router-dom";
import Thank from "../components/Thank";
import { useEffect, useState } from "react";
import Background from "../assets/bg-sidebar-mobile.svg";
import { useSelectedPlanStore } from "../store/useSelectedPlanStore";
import { useFormStore } from "../store/useFormStore";
import { useAddOnsStore } from "../store/useAddOnsStore";

function FinishingUp() {
  const activePage = useActivePage((state) => state.activePage);
  const [showThank, setShowThank] = useState(false);
  const navigate = useNavigate();
  const { selectedOption } = useSelectedPlanStore();
  const { inputInfo } = useFormStore();
  const { selectedAddOns } = useAddOnsStore();

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

  const sendDataToBackend = async () => {
    try {
      const dataToSend = {
        name: inputInfo.name,
        email: inputInfo.email,
        phone: inputInfo.phone,
        plan: selectedOption,
        onlineService: selectedAddOns.includes("Online service"),
        LargerStorage: selectedAddOns.includes("Larger storage"),
        CustomizableProfile: selectedAddOns.includes("Customizable profile"),
      };

      const response = await axios.post(
        "https://multi-step-form-ek9o.onrender.com/api/personalinfo",
        dataToSend
      );

      if (response.status === 201) {
        console.log("Data saved successfully.");
      } else {
        console.error("Error saving data to the backend.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleNextClick = () => {
    sendDataToBackend();
    setShowThank(true);
  };

  const handleBackClick = () => {
    navigate("/pick");
  };

  return (
    <>
      {!showThank ? (
        <Option>
          <Process>
            <Pagination activePage={activePage} />
            <Card>
              <Chapter>
                <Title>Finishing up</Title>
                <Instruction>
                  Double-check everything looks OK before confirming.
                </Instruction>
              </Chapter>
              <Finishing />
              {isDesktop && (
                <Next>
                  <Back onClick={handleBackClick}>Go Back</Back>
                  <NextBtn onClick={handleNextClick} type="submit">
                    Confirm
                  </NextBtn>
                </Next>
              )}
            </Card>
          </Process>
          {!isDesktop && (
            <Next>
              <Back onClick={handleBackClick}>Go Back</Back>
              <NextBtn onClick={handleNextClick} type="submit">
                Confirm
              </NextBtn>
            </Next>
          )}
        </Option>
      ) : (
        <Option>
          <Process>
            <Pagination activePage={activePage} />
            <Card
              style={{
                paddingTop: "79px",
                paddingBottom: "79px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Thank />
            </Card>
          </Process>
        </Option>
      )}
    </>
  );
}

export default FinishingUp;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
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
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

const Next = styled.div`
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
    margin-top: 116px;
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
  padding: 12px 16px;
  border-radius: 4px;
  background-color: var(--purplishBlue);
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
    background: #928cff;
  }
  @media (min-width: 1440px) {
    border-radius: 8px;
    font-size: 16px;
    padding: 14px 24px;
    width: 123px;
    align-self: flex-end;
  }
`;
