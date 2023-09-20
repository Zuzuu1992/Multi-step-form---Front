import styled from "styled-components";
import ArcadeIcon from "../assets/icon-arcade.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";
import ProIcon from "../assets/icon-pro.svg";
import PlanToggle from "./PlanToggle";
import { useSelectedPlanStore } from "../store/useSelectedPlanStore";
import { usePlanStore } from "../store/usePlanStore";

interface OptionProps {
  selected: boolean;
}

function Plan() {
  const { selectedOption, setSelectedOption } = useSelectedPlanStore();
  const { period } = usePlanStore();

  const handleSelect = (option: string) => {
    if (selectedOption === option) {
      setSelectedOption(null);
    } else {
      setSelectedOption(option);
    }
  };

  return (
    <PlanWrapper>
      <PlanBox>
        <Option
          selected={selectedOption === "arcade"}
          onClick={() => handleSelect("arcade")}
        >
          <Icon src={ArcadeIcon}></Icon>
          <Text>
            <Title>Arcade</Title>
            {period ? <Price>$90/yr</Price> : <Price>$9/mo</Price>}
            {period ? <Free>2 months free</Free> : null}
          </Text>
        </Option>
        <Option
          selected={selectedOption === "advanced"}
          onClick={() => handleSelect("advanced")}
        >
          <Icon src={AdvancedIcon}></Icon>
          <Text>
            <Title>Advanced</Title>
            {period ? <Price>$120/yr</Price> : <Price>$12/mo</Price>}
            {period ? <Free>2 months free</Free> : null}
          </Text>
        </Option>
        <Option
          selected={selectedOption === "pro"}
          onClick={() => handleSelect("pro")}
        >
          <Icon src={ProIcon}></Icon>
          <Text>
            <Title>Pro</Title>
            {period ? <Price>$150/yr</Price> : <Price>$15/mo</Price>}
            {period ? <Free>2 months free</Free> : null}
          </Text>
        </Option>
      </PlanBox>
      <PlanToggle />
    </PlanWrapper>
  );
}

export default Plan;

const PlanWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const PlanBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Option = styled.div<OptionProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 14px;
  padding: 14px 16px;
  border-radius: 8px;
  background: var(--white, #fff);
  border: 1px solid
    ${({ selected }) =>
      selected ? "var(--Purple, #483EFF)" : "var(--lightGrey)"};
`;

const Icon = styled.img``;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

const Title = styled.p`
  color: var(--marineBlue);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Price = styled.p`
  color: var(--coolGrey);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Free = styled.p`
  color: var(--Denim, #022959);
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
