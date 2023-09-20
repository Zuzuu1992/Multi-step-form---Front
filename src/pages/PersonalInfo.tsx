import Pagination from "../components/Pagination";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../loginSchema";
import { useFormStore } from "../store/useFormStore";
import useActivePage from "../store/useActivePage";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

function PersonalInfo() {
  const navigate = useNavigate();
  const { inputInfo, setInputInfo } = useFormStore();
  const activePage = useActivePage((state) => state.activePage);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submitHandler = async (data: FormData) => {
    navigate("/plan");
    setInputInfo(data);
    console.log(data);
  };

  return (
    <>
      <Option>
        <Process>
          <Pagination activePage={activePage} />
          <Card>
            <Chapter>
              <Title>Personal info</Title>
              <Instruction>
                Please provide your name, email address, and phone number.
              </Instruction>
            </Chapter>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <FillBox>
                <ErrorLabelBox>
                  <Label htmlFor="name">Name</Label>
                  {errors.name ? (
                    <ErrorMessage>{errors.name.message}</ErrorMessage>
                  ) : null}
                </ErrorLabelBox>
                <Input
                  type="text"
                  id="name"
                  placeholder="e.g. Stephen King"
                  {...register("name", {
                    onChange: (e) => {
                      setInputInfo({ ...inputInfo, name: e.target.value });
                    },
                  })}
                  // onBlur={handleInputBlur}
                />
              </FillBox>

              <FillBox>
                <ErrorLabelBox>
                  <Label htmlFor="email">Email Address</Label>
                  {errors.email ? (
                    <ErrorMessage>{errors.email.message}</ErrorMessage>
                  ) : null}
                </ErrorLabelBox>
                <Input
                  type="text"
                  id="email"
                  placeholder="e.g. stephenking@lorem.com"
                  {...register("email", {
                    onChange: (e) => {
                      setInputInfo({ ...inputInfo, email: e.target.value });
                    },
                  })}
                  // onBlur={handleInputBlur}
                />
              </FillBox>

              <FillBox>
                <ErrorLabelBox>
                  <Label htmlFor="phone">Phone Number</Label>
                  {errors.phone ? (
                    <ErrorMessage>{errors.phone.message}</ErrorMessage>
                  ) : null}
                </ErrorLabelBox>
                <Input
                  type="text"
                  id="phone"
                  placeholder="e.g. +1 234 567 890"
                  {...register("phone", {
                    onChange: (e) => {
                      setInputInfo({ ...inputInfo, phone: e.target.value });
                    },
                  })}
                  // onBlur={handleInputBlur}
                />
              </FillBox>
              <Next>
                <NextBtn type="submit">Next Step</NextBtn>
              </Next>
            </Form>
          </Card>
        </Process>
      </Option>
    </>
  );
}

export default PersonalInfo;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
  /* padding: 34px 16px; */
  padding: 34px 16px 82px 16px;
  width: 100%;
`;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
`;

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
  width: 100%;
`;

const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin-bottom: 22px;
`;

const Title = styled.div`
  color: var(--marineBlue);
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Instruction = styled.div`
  color: var(--coolGrey);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px; /* 156.25% */
`;

// const Body = styled.div``;

const Next = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  /* justify-content: space-between;
  align-items: center; */
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
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

const Form = styled.form`
  /* margin-top: 22px; */
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

const FillBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
`;

const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--border-color, #d6d9e6);
  background: var(--white);
  font-family: "Ubuntu", sans-serif;
  padding-left: 16px;
  ::placeholder {
    color: var(--coolGrey);
    font-family: "Ubuntu", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const Label = styled.label`
  color: var(--marineBlue);
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ErrorLabelBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ErrorMessage = styled.p`
  color: var(--strawberryRed);
  text-align: right;
  font-family: Ubuntu;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
