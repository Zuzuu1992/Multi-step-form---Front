import Pagination from "../components/Pagination";
import styled from "styled-components";
import NextStep from "../components/NextStep";
import Plan from "../components/Plan";

function SelectPlan() {
  return (
    <>
      <Option>
        <Process>
          <Pagination />
          <Card>
            <Chapter>
              <Title>Select your plan</Title>
              <Instruction>
                You have the option of monthly or yearly billing.
              </Instruction>
            </Chapter>
            <Plan />
          </Card>
        </Process>
        <NextStep />
      </Option>
    </>
  );
}

export default SelectPlan;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
  /* padding: 34px 16px; */
  padding: 34px 16px 82px 16px;
  width: 100%;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
`;

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
  width: 100%;
`;

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