import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfo";
import SelectPlan from "./pages/SelectPlan";
import PickAddOns from "./pages/PickAddOns";
import FinishingUp from "./pages/FinishingUp";
import ThankYou from "./pages/ThankYou";

function App() {
  return (
    <Main>
      <Router>
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/plan" element={<SelectPlan />} />
          <Route path="/pick" element={<PickAddOns />} />
          <Route path="/finish" element={<FinishingUp />} />
          <Route path="/thank" element={<ThankYou />} />
        </Routes>
      </Router>
    </Main>
  );
}

export default App;

const Main = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  @media (min-width: 1440px) {
    height: auto;
    background: var(--BG, #eff5ff);
    padding: 154px 250px;
  }
`;
