import styled from "styled-components";
// import { useNavigate } from "react-router-dom";
import useNumber from "../store/useNumber";
// import { useNumber } from "../store/useNumber";
// import { persist, devtools } from "zustand/middleware";
// import nextStep from "./NextStep";
// import { useCounterStore } from "../store/useNumber";

function Pagination() {
  const { currentPage, setCurrentPage } = useNumber();

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  // const navigate = useNavigate();

  // const handle1Click = () => {
  //   navigate("/");
  // };
  // const handle2Click = () => {
  //   navigate("/plan");
  // };
  // const handle3Click = () => {
  //   navigate("/pick");
  // };
  // const handle4Click = () => {
  //   navigate("/finish");
  // };

  return (
    <NumberBox>
      {/* <Number onClick={handle1Click}> 1</Number>
      <Number onClick={handle2Click}> 2</Number>
      <Number onClick={handle3Click}> 3</Number>
      <Number onClick={handle4Click}> 4</Number> */}
      {[1, 2, 3, 4].map((page) => (
        <Number
          key={page}
          className={currentPage === page ? "active" : ""}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </Number>
      ))}
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
