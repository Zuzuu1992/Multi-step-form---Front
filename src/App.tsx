import styled from "styled-components";
import Background from "../src/assets/bg-sidebar-mobile.svg";
import Pagination from "./components/Pagination";
import Step from "./components/Step";
// import EntryForm from "./components/EntryForm";
import NextStep from "./components/NextStep";
import Plan from "./components/plan";

function App() {
  return (
    <>
      <Main>
        {/* <img src={Mskd} /> */}
        <Option>
          <Process>
            <Pagination />
            <Card>
              <Step />
              {/* <EntryForm /> */}
              <Plan />
            </Card>
          </Process>
          <NextStep />
        </Option>
      </Main>
    </>
  );
}

export default App;

const Main = styled.div`
  background-image: url(${Background});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100%;
  /* display: flex; */
`;

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
