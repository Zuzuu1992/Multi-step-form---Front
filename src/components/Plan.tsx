import styled from "styled-components";
import ArcadeIcon from "../assets/icon-arcade.svg";
import AdvancedIcon from "../assets/icon-advanced.svg";
import ProIcon from "../assets/icon-pro.svg";
import NextStep from "./NextStep";

function Plan() {
  return (
    <PlanWrapper>
      <PlanBox>
        <Option>
          <Icon src={ArcadeIcon}></Icon>
          <Text>
            <Title>Arcade</Title>
            <Price>$9/mo</Price>
          </Text>
        </Option>
        <Option>
          <Icon src={AdvancedIcon}></Icon>
          <Text>
            <Title>Advanced</Title>
            <Price>$12/mo</Price>
          </Text>
        </Option>
        <Option>
          <Icon src={ProIcon}></Icon>
          <Text>
            <Title>Pro</Title>
            <Price>$15/mo</Price>
          </Text>
        </Option>
      </PlanBox>
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

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 14px;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid var(--lightGrey);
  background: var(--white, #fff);
`;

const Icon = styled.img``;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 7px;
`;

const Title = styled.p``;
const Price = styled.p``;
