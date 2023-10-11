import Pagination from "../components/Pagination";
import styled from "styled-components";
import Thank from "../components/Thank";
import useActivePage from "../store/useActivePage";
import Background from "../assets/bg-sidebar-mobile.svg";

function FinishingUp() {
  const activePage = useActivePage((state) => state.activePage);
  return (
    <>
      <Option>
        <Process>
          <Pagination activePage={activePage} />
          <Card>
            <Thank />
          </Card>
        </Process>
      </Option>
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
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
  padding: 34px 16px 82px 16px;
  width: 100%;
`;

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
  width: 100%;
`;
