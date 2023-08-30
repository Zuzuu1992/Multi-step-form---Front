import styled from "styled-components";

function Pagination() {
  return (
    <NumberBox>
      <Number>1</Number>
      <Number>2</Number>
      <Number>3</Number>
      <Number>4</Number>
    </NumberBox>
  );
}

export default Pagination;

const NumberBox = styled.div`
  display: flex;
  column-gap: 16px;
`;

const Number = styled.button`
  border-radius: 50%;
  height: 33px;
  width: 33px;
  border: 1px solid white;
  background-color: transparent;
  color: var(--white);
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
