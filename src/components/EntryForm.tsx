import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import loginSchema from "../loginSchema";
import NextStep from "./NextStep";

function EntryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  const handleInputBlur = () => {
    handleSubmit(onSubmit)();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FillBox>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="e.g. Stephen King"
          {...register("name")}
          onBlur={handleInputBlur}
        />
      </FillBox>
      {errors.name ? <p>{errors.name.message}</p> : null}
      <FillBox>
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
          {...register("email")}
          onBlur={handleInputBlur}
        />
      </FillBox>
      {errors.email ? <p>{errors.email.message}</p> : null}
      <FillBox>
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          type="text"
          id="phone"
          placeholder="e.g. +1 234 567 890"
          {...register("phone")}
          onBlur={handleInputBlur}
        />
      </FillBox>
      {errors.phone ? <p>{errors.phone.message}</p> : null}
      {/* <NextStep /> */}
      {/* <input type="submit" hidden /> */}
    </Form>
  );
}

export default EntryForm;

const Form = styled.form`
  margin-top: 22px;
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
