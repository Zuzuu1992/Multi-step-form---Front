import Pagination from "../components/Pagination";
import styled from "styled-components";
import NextStep from "../components/NextStep";
import Thank from "../components/Thank";

function FinishingUp() {
  return (
    <>
      <Option>
        <Process>
          <Pagination />
          <Card>
            <Thank />
          </Card>
        </Process>
        <NextStep />
      </Option>
    </>
  );
}

export default FinishingUp;

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
