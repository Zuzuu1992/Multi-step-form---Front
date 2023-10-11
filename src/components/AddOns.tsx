import styled from "styled-components";
import Checkmark from "../assets/icon-checkmark.svg";
import { usePlanStore } from "../store/usePlanStore";
import { useAddOnsStore } from "../store/useAddOnsStore";

interface OptionProps {
  selected: boolean;
}

function AddOns() {
  const { period } = usePlanStore();
  const { selectedAddOns, setSelectedAddOns } = useAddOnsStore();

  const toggleAddOn = (addOnName: string) => {
    if (selectedAddOns.includes(addOnName)) {
      setSelectedAddOns(selectedAddOns.filter((name) => name !== addOnName));
    } else {
      setSelectedAddOns([...selectedAddOns, addOnName]);
    }
  };

  const isAddOnSelected = (addOnName: string) => {
    return selectedAddOns.includes(addOnName);
  };

  return (
    <AddOnWrapper>
      <AddOnBox>
        <Option selected={isAddOnSelected("Online service")}>
          <Left>
            <Check
              type="checkbox"
              checked={isAddOnSelected("Online service")}
              onChange={() => toggleAddOn("Online service")}
            />
            <Text>
              <Title>Online service</Title>
              <Details>Access to multiplayer games</Details>
            </Text>
          </Left>
          {period ? <Price>+$10/yr</Price> : <Price>+$1/mo</Price>}
        </Option>
        <Option selected={isAddOnSelected("Larger storage")}>
          <Left>
            <Check
              type="checkbox"
              checked={isAddOnSelected("Larger storage")}
              onChange={() => toggleAddOn("Larger storage")}
            />
            <Text>
              <Title>Larger storage</Title>
              <Details>Extra 1TB of cloud save</Details>
            </Text>
          </Left>
          {period ? <Price>+$20/yr</Price> : <Price>+$2/mo</Price>}
        </Option>
        <Option selected={isAddOnSelected("Customizable profile")}>
          <Left>
            <Check
              type="checkbox"
              checked={isAddOnSelected("Customizable profile")}
              onChange={() => toggleAddOn("Customizable profile")}
            />
            <Text>
              <Title>Customizable profile</Title>
              <Details>Custom theme on your profile</Details>
            </Text>
          </Left>
          {period ? <Price>+$20/yr</Price> : <Price>+$2/mo</Price>}
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
  @media (min-width: 1440px) {
    row-gap: 16px;
  }
`;

const Option = styled.div<OptionProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 14px;
  padding: 14px 16px;
  border-radius: 8px;
  border: 1px solid
    ${({ selected }) =>
      selected ? "var(--Purple, #483EFF)" : "var(--lightGrey)"};
  background: var(--white, #fff);
  cursor: pointer;
  @media (min-width: 1440px) {
    padding: 16px 24px 20px 16px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  @media (min-width: 1440px) {
    column-gap: 24px;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  @media (min-width: 1440px) {
    row-gap: 7px;
  }
`;

const Title = styled.p`
  color: var(--marineBlue);
  font-family: Ubuntu;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

const Price = styled.p`
  color: var(--purplishBlue);
  text-align: right;
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media (min-width: 1440px) {
    font-size: 15px;
  }
`;

const Details = styled.p`
  color: var(--coolGrey);
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  @media (min-width: 1440px) {
    font-size: 15px;
  }
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
