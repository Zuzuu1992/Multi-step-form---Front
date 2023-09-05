import styled from "styled-components";
import Checkmark from "../assets/icon-checkmark.svg";

function AddOns() {
  return (
    <AddOnWrapper>
      <AddOnBox>
        <Option>
          <Left>
            <Check type="checkbox" />
            <Text>
              <Title>Online service</Title>
              <Details>Access to multiplayer games</Details>
            </Text>
          </Left>
          <Price>+$1/mo</Price>
        </Option>
        <Option>
          <Left>
            <Check type="checkbox" />
            <Text>
              <Title>Larger storage</Title>
              <Details>Extra 1TB of cloud save</Details>
            </Text>
          </Left>
          <Price>+$2/mo</Price>
        </Option>
        <Option>
          <Left>
            <Check type="checkbox" />
            <Text>
              <Title>Customizable profile</Title>
              <Details>Custom theme on your profile</Details>
            </Text>
          </Left>
          <Price>+$2/mo</Price>
        </Option>
      </AddOnBox>
    </AddOnWrapper>
  );
}

export default AddOns;

const AddOnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const AddOnBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 14px;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid var(--lightGrey);
  background: var(--white, #fff);
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

const Title = styled.p`
  color: var(--marineBlue);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Price = styled.p`
  color: var(--purplishBlue);
  text-align: right;
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Details = styled.p`
  color: var(--coolGrey);
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

const Check = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid #e6e5ea;
  border-radius: 2px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 2px;
  }

  &:checked::before {
    background-color: var(--purplishBlue);
    background-image: url(${Checkmark});

    background-position: center;
    background-repeat: no-repeat;
    transform: translate(-1.8px, -1.8px);
  }
`;
