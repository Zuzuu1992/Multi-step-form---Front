import Pagination from "../components/Pagination";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../loginSchema";
import { useFormStore } from "../store/useFormStore";
import useActivePage from "../store/useActivePage";
import Background from "../assets/bg-sidebar-mobile.svg";
import { useEffect, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

function PersonalInfo() {
  const navigate = useNavigate();
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1440);

  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 1440);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
                  className={errors.name ? "error" : ""}
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
                  className={errors.email ? "error" : ""}
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
                  className={errors.phone ? "error" : ""}
                />
              </FillBox>
              {!isDesktop && (
                <Next>
                  <NextBtn type="submit">Next Step</NextBtn>
                </Next>
              )}
              {isDesktop && <NextBtn type="submit">Next Step</NextBtn>}
            </Form>
          </Card>
        </Process>
      </Option>
    </>
  );
}

export default PersonalInfo;

const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 30%;

  @media (min-width: 1440px) {
    background-image: none;
    background: var(--White, #fff);
    height: 600px;
    padding: 16px;
    border-radius: 15px;
    align-items: stretch;
  }
`;

const Process = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 34px;
  padding: 34px 16px 82px 16px;
  width: 100%;
  @media (min-width: 1440px) {
    flex-direction: row;
    column-gap: 0px;
    align-items: flex-start;
    padding: 0;
    height: 100%;
    justify-content: center;
    width: auto;
  }
`;

const Card = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  padding: 32px 24px;
  @media (min-width: 1440px) {
    padding: 40px 100px 32px 100px;
    box-shadow: none;
    height: 100%;
    width: 72%;
  }
`;

const Chapter = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin-bottom: 22px;
  @media (min-width: 1440px) {
    margin-bottom: 35px;
    row-gap: 11px;
  }
`;

const Title = styled.div`
  color: var(--marineBlue);
  font-family: "Ubuntu", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 1440px) {
    font-size: 32px;
  }
`;

const Instruction = styled.div`
  color: var(--coolGrey);
  font-feature-settings: "clig" off, "liga" off;
  font-family: "Ubuntu", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

const Next = styled.div`
  background-color: var(--white);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 16px;
  position: absolute;
  bottom: 0;
  right: 0;
  @media (min-width: 1440px) {
    position: static;
    padding: 92px 0px 0px 0px;
  }
`;

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
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #164a8a;
  }
  @media (min-width: 1440px) {
    border-radius: 8px;
    font-size: 16px;
    padding: 14px 24px;
    width: 123px;
    align-self: flex-end;
    margin-top: 92px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  @media (min-width: 1440px) {
    row-gap: 24px;
  }
`;

const FillBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  @media (min-width: 1440px) {
    row-gap: 8px;
  }
`;

const Input = styled.input`
  height: 40px;
  border-radius: 4px;
  border: 1px solid var(--border-color, #d6d9e6);
  background: var(--white);
  font-family: "Ubuntu", sans-serif;
  color: var(--Denim, #022959);
  padding-left: 16px;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover,
  &:active,
  &:focus {
    border-color: var(--Purple, #483eff);
  }

  &.error {
    border-color: var(--Red-Errors, #ee374a);
  }

  @media (min-width: 1440px) {
    font-size: 16px;
  }
  ::placeholder {
    color: var(--coolGrey);
    font-family: "Ubuntu", sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
`;

const Label = styled.label`
  color: var(--marineBlue);
  font-family: "Ubuntu", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (min-width: 1440px) {
    font-size: 14px;
  }
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
  @media (min-width: 1440px) {
  }
`;
