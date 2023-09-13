// import { useCounterStore } from "../store/useNumber";
import styled from "styled-components";
import useNumber from "../store/useNumber";
import useValidForm from "../store/useValidForm";
import { useNavigate } from "react-router-dom";

function NextStep() {
  const navigate = useNavigate();
  const formData = useValidForm((state) => state.formData);
  const setFormData = useValidForm((state) => state.setFormData);
  // const { currentPage, setCurrentPage } = useNumber();

  // const handleNextClick = () => {
  //   if (currentPage < 4) {
  //     setCurrentPage(currentPage + 1);
  //   }
  // };

  // const handleNextClick = () => {
  //   if (window.location.pathname === "/") {
  //     navigate("/plan");
  //   } else if (window.location.pathname === "/plan") {
  //     navigate("/pick");
  //   } else if (window.location.pathname === "/pick") {
  //     navigate("/finish");
  //   } else {

  //   }
  // };

  const handleNextClick = () => {
    // Create a FormData object based on the current form data
    const formDataObj = new FormData();
    formDataObj.append("name", formData.name);
    formDataObj.append("email", formData.email);
    formDataObj.append("phone", formData.phone);

    // Implement form validation logic
    const isFormValid = validateForm(formDataObj);

    if (isFormValid) {
      // If the form is valid, navigate to the next page
      navigateToNextPage();
    } else {
      alert("Please fill out the form correctly before proceeding.");
    }
  };

  const validateForm = (formData: FormData) => {
    // Implement your form validation logic here
    // Return true if the form is valid, otherwise return false
    // Example: return true if all required fields are non-empty
    return true;
  };

  const navigateToNextPage = () => {
    if (window.location.pathname === "/") {
      navigate("/plan");
    } else if (window.location.pathname === "/plan") {
      navigate("/pick");
    } else if (window.location.pathname === "/pick") {
      navigate("/finish");
    }
  };

  return (
    <Next>
      <NextBtn type="submit" onClick={handleNextClick}>
        Next Step
      </NextBtn>
    </Next>
  );
}

export default NextStep;

const Next = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  /* justify-content: space-between;
  align-items: center; */
  width: 100%;
  padding: 16px;
`;

// const Back = styled.div`
//   color: var(--coolGrey);
//   font-family: Ubuntu;
//   font-size: 14px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
// `;

const NextBtn = styled.button`
  background-color: var(--white);
  padding: 12px 16px;
  border-radius: 4px;
  background: var(--marineBlue);
  color: var(--white, #fff);
  font-family: "Ubuntu", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
`;
