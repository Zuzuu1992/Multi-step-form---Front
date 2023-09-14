import Pagination from "../components/Pagination";
import styled from "styled-components";
import EntryForm from "../components/EntryForm";
import Plan from "../components/Plan";
import AddOns from "../components/AddOns";
import Finishing from "../components/Finishing";
import usePage from "../store/usePage";

function PersonalInfo() {
  const { page, setPage } = usePage();

  const pageTiTles = [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
  ];

  const displayInstructions = () => {
    if (page === 0) {
      return "Please provide your name, email address, and phone number.";
    } else if (page === 1) {
      return "You have the option of monthly or yearly billing.";
    } else if (page === 2) {
      return "Add-ons help enhance your gaming experience.";
    } else {
      return "Double-check everything looks OK before confirming.";
    }
  };

  const displayPage = () => {
    if (page === 0) {
      return <EntryForm />;
    } else if (page === 1) {
      return <Plan />;
    } else if (page === 2) {
      return <AddOns />;
    } else {
      return <Finishing />;
    }
  };

  return (
    <>
      <Option>
        <Process>
          <Pagination />
          <Card>
            <Chapter>
              <Title>{pageTiTles[page]}</Title>
              <Instruction>{displayInstructions()}</Instruction>
            </Chapter>
            <Body>{displayPage()}</Body>
          </Card>
        </Process>
        <Next>
          <NextBtn
            disabled={page == pageTiTles.length - 1}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next Step
          </NextBtn>
        </Next>
      </Option>
    </>
  );
}

export default PersonalInfo;

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
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
`;

const Body = styled.div``;

const Next = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  /* justify-content: space-between;
  align-items: center; */
  width: 100%;
  padding: 16px;
`;

// const Back = styled.div`
//   color: var(--coolGrey);
//   font-family: Ubuntu;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
// `;

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
`;
