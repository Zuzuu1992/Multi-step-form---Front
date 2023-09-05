import styled from "styled-components";

function Finishing() {
  return (
    <FinishWrapper>
      <Summery>
        <FirstRow>
          <LeftSide>
            <ChosenPlan>Arcade (Monthly)</ChosenPlan>
            <Change>Change</Change>
          </LeftSide>
          <PriceRight>$9/mo</PriceRight>
        </FirstRow>
        <Line></Line>
        <DownRow>
          <ChosenAddOn>Online service</ChosenAddOn>
          <AddOnPrice>+$1/mo</AddOnPrice>
        </DownRow>
        <DownRow>
          <ChosenAddOn>Larger storage</ChosenAddOn>
          <AddOnPrice>+$2/mo</AddOnPrice>
        </DownRow>
      </Summery>
      <TotalPay>
        <TotalTime>Total (per month)</TotalTime>
        <TotoalPrice>+$12/mo</TotoalPrice>
      </TotalPay>
    </FinishWrapper>
  );
}

export default Finishing;

const FinishWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const Summery = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  border-radius: 8px;
  background: var(--alabaster);
  padding: 16px;
`;

const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

const ChosenPlan = styled.p`
  color: var(--marineBlue);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Change = styled.p`
  color: var(--coolGrey);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: underline;
`;

const PriceRight = styled.p`
  color: var(--marineBlue);
  text-align: right;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;

const Line = styled.div`
  height: 1px;
  width: 100%;
  opacity: 0.2043;
  background: var(--coolGrey);
`;

const DownRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChosenAddOn = styled.p`
  color: var(--coolGrey);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const AddOnPrice = styled.p`
  color: var(--marineBlue);
  text-align: right;
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const TotalPay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 16px;
  padding-right: 16px;
`;

const TotalTime = styled.p`
  color: var(--coolGrey);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const TotoalPrice = styled.p`
  color: var(--purplishBlue);
  text-align: right;
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`;
