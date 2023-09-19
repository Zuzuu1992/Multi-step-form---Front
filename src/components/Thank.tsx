import styled from "styled-components";
import ThankYou from "../assets/icon-thank-you.svg";

function Thank() {
  return (
    <ThankBox>
      <ThankIcon src={ThankYou}></ThankIcon>
      <Text>
        <BoldThank>Thank you!</BoldThank>
        <LargeText>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </LargeText>
      </Text>
    </ThankBox>
  );
}

export default Thank;

const ThankBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;
  /* margin-top: 79px;
  margin-bottom: 79px; */
`;

const ThankIcon = styled.img`
  width: 56px;
  height: 56px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
`;

const BoldThank = styled.p`
  color: var(--marineBlue);
  text-align: center;
  font-family: Ubuntu;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LargeText = styled.p`
  color: var(--coolGrey);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  /* Body (L) */
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
`;
