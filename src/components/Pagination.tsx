import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginationProps {
  activePage: number;
}

function Pagination({ activePage }: PaginationProps) {
  const navigate = useNavigate();
  const location = useLocation();

  {
    return (
      <NumberBox>
        <Number
          style={{
            background: location.pathname === "/" ? "#bee2fd" : "none",
            color: location.pathname === "/" ? "#022959" : "white",
            border: location.pathname === "/" ? "none" : "1px solid white",
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          1
        </Number>
        <Number
          style={{
            background: location.pathname === "/plan" ? "#bee2fd" : "none",
            color: location.pathname === "/plan" ? "#022959" : "white",
            border: location.pathname === "/plan" ? "none" : "1px solid white",
          }}
          onClick={() => {
            navigate("/plan");
          }}
        >
          2
        </Number>
        <Number
          style={{
            background: location.pathname === "/pick" ? "#bee2fd" : "none",
            color: location.pathname === "/pick" ? "#022959" : "white",
            border: location.pathname === "/pick" ? "none" : "1px solid white",
          }}
          onClick={() => {
            navigate("/pick");
          }}
        >
          3
        </Number>
        <Number
          style={{
            background: location.pathname === "/finish" ? "#bee2fd" : "none",
            color: location.pathname === "/finish" ? "#022959" : "white",
            border:
              location.pathname === "/finish" ? "none" : "1px solid white",
          }}
          onClick={() => {
            navigate("/finish");
          }}
        >
          4
        </Number>
      </NumberBox>
    );
  }
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
  /* border: ${(props) =>
    props.className === "active" ? "none" : "1px solid white"}; */
  /* background-color: ${(props) =>
    props.className === "active" ? "#BEE2FD" : "transparent"};
  color: ${(props) =>
    props.className === "active" ? "var(--marineBlue)" : "var(--white)"}; */
  text-align: center;
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
`;
