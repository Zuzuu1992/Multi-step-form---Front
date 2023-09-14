import styled from "styled-components";
import usePage from "../store/usePage";

function Pagination() {
  const { page, setPage } = usePage();

  const renderPageNumbers = () => {
    const pageNumbers = [0, 1, 2, 3];

    return pageNumbers.map((pageNumber) => (
      <Number
        key={pageNumber}
        className={page === pageNumber ? "active" : ""}
        onClick={() => setPage(pageNumber)}
      >
        {pageNumber + 1}
      </Number>
    ));
  };

  return <NumberBox>{renderPageNumbers()}</NumberBox>;
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
  border: ${(props) =>
    props.className === "active" ? "none" : "1px solid white"};
  background-color: ${(props) =>
    props.className === "active" ? "#BEE2FD" : "transparent"};
  color: ${(props) =>
    props.className === "active" ? "var(--marineBlue)" : "var(--white)"};
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
