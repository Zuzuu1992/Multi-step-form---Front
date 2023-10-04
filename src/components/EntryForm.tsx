import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../loginSchema";
import { useEffect, useRef } from "react";
import { useFormState } from "../store/useFormState";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

function EntryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // const onSubmit = async (data: any) => {
  //   console.log(data);
  // };
  const submitHandler = async (data: FormData) => {
    console.log(data);
  };

  const setFormRef = useFormState((state) => state.setFormRef);
  const formRef = useRef<HTMLFormElement | null>(null);

  useEffect(() => {
    setFormRef(formRef);
  }, [setFormRef]);

  // const handleInputBlur = () => {
  //   handleSubmit(onSubmit)();
  // };

  return (
    <Form ref={formRef} onSubmit={handleSubmit(submitHandler)}>
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
          {...register("name")}
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
          {...register("email")}
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
          {...register("phone")}
          // onBlur={handleInputBlur}
        />
      </FillBox>
    </Form>
  );
}

export default EntryForm;

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
  padding-left: 16px;
  color: var(--Denim, #022959);
  font-family: Ubuntu;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

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
