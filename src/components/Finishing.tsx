import styled from "styled-components";
import { useSelectedPlanStore } from "../store/useSelectedPlanStore";
import { useAddOnsStore } from "../store/useAddOnsStore";
import { usePlanStore } from "../store/usePlanStore";

function Finishing() {
  const { selectedOption } = useSelectedPlanStore();
  const { selectedAddOns } = useAddOnsStore();
  const { period } = usePlanStore();

  const calculateTotalPrice = () => {
    let planPrice = 0;
    let addOnsPrice = 0;

    // Calculate plan price based on the selectedOption
    if (selectedOption === "arcade") {
      planPrice = period ? 90 : 9;
    } else if (selectedOption === "advanced") {
      planPrice = period ? 120 : 12;
    } else if (selectedOption === "pro") {
      planPrice = period ? 150 : 15;
    }

    // Calculate add-ons price based on selectedAddOns
    for (const addOn of selectedAddOns) {
      if (addOn === "Online service") {
        addOnsPrice += period ? 10 : 1;
      } else if (addOn === "Larger storage") {
        addOnsPrice += period ? 20 : 2;
      } else if (addOn === "Customizable profile") {
        addOnsPrice += period ? 20 : 2;
      }
    }

    // Calculate the total price
    const totalPrice = planPrice + addOnsPrice;

    return totalPrice;
  };

  function getPlanName(option: string, period: boolean) {
    const planName =
      {
        arcade: "Arcade",
        advanced: "Advanced",
        pro: "Pro",
      }[option] || "Unknown Plan";

    return `${planName} (${period ? "Yearly" : "Monthly"})`;
  }

  function getPlanPrice(option: string, period: boolean) {
    // Define your plan prices here based on the selectedOption
    const planPrices: { [key: string]: number } = {
      arcade: period ? 90 : 9,
      advanced: period ? 120 : 12,
      pro: period ? 150 : 15,
    };

    // Retrieve the price based on the selectedOption
    const price = planPrices[option] || 0;

    return period ? `$${price}/yr` : `$${price}/mo`;
  }

  function getAddOnPrice(addOnName: string, period: boolean) {
    // Define your add-on prices here based on the addOnName
    const addOnPrices: { [key: string]: number } = {
      "Online service": period ? 10 : 1,
      "Larger storage": period ? 20 : 2,
      "Customizable profile": period ? 20 : 2,
      // Add more add-ons and prices as needed
    };

    // Retrieve the price based on the addOnName
    const price = addOnPrices[addOnName] || 0;

    return period ? `+$${price}/yr` : `+$${price}/mo`;
  }

  return (
    <FinishWrapper>
      <Summery>
        <FirstRow>
          <LeftSide>
            <ChosenPlan>
              {selectedOption !== null
                ? getPlanName(selectedOption, period)
                : "No plan selected"}
            </ChosenPlan>
            <Change>Change</Change>
          </LeftSide>

          <PriceRight>{getPlanPrice(selectedOption!, period)}</PriceRight>
        </FirstRow>
        <Line></Line>
        {selectedAddOns.length > 0 && (
          <>
            {selectedAddOns.map((addOnName) => (
              <DownRow key={addOnName}>
                <ChosenAddOn>{addOnName}</ChosenAddOn>
                <AddOnPrice>{getAddOnPrice(addOnName, period)}</AddOnPrice>
              </DownRow>
            ))}
          </>
        )}
      </Summery>
      <TotalPay>
        <TotalTime>Total (per month)</TotalTime>
        <TotoalPrice>+${calculateTotalPrice()}/mo</TotoalPrice>
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
