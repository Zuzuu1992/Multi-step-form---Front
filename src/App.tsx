import styled from "styled-components";
import Background from "../src/assets/bg-sidebar-mobile.svg";

function App() {
  return (
    <>
      <Main>
        {/* <img src={Mskd} /> */}
        <Option>
          <Process>
            <Pagination>
              <Number>1</Number>
              <Number>2</Number>
              <Number>3</Number>
              <Number>4</Number>
            </Pagination>
            <Card>
              <Step>
                <Title>Personal info</Title>
                <Instruction>
                  Please provide your name, email address, and phone number.
                </Instruction>
              </Step>
              <Form>
                <FillBox>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" id="name" />
                </FillBox>
                <FillBox>
                  <Label htmlFor="email">Email Address</Label>
                  <Input type="text" id="email" />
                </FillBox>
                <FillBox>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input type="text" id="phone" />
                </FillBox>
              </Form>
            </Card>
          </Process>
          <Next>
            <NextBtn>Next Step</NextBtn>
          </Next>
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
  padding: 34px 16px 58px 16px;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
`;

const Pagination = styled.div`
  display: flex;
  column-gap: 16px;
`;

const Number = styled.button`
  border-radius: 50%;
  height: 33px;
  width: 33px;
  border: 1px solid white;
  background-color: transparent;
  /* padding: 6px 10px; */
  color: var(--white);
  text-align: center;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
`;
const Step = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

const Title = styled.div`
  color: var(--marineBlue);
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Instruction = styled.div`
  color: var(--coolGrey);
  font-feature-settings: "clig" off, "liga" off;
  /* Body (L) */
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
`;

const Next = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 16px;
`;

const NextBtn = styled.button`
  background-color: var(--white);
  padding: 12px 16px;
  border-radius: 4px;
  background: var(--marineBlue);
  color: var(--white, #fff);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`;

const Form = styled.form`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const FillBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--border-color, #d6d9e6);
  background: var(--white);
`;

const Label = styled.label`
  color: var(--marineBlue);
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
