import styled from "styled-components";

function EntryForm() {
  return (
    <Form>
      <FillBox>
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" placeholder="e.g. Stephen King" />
      </FillBox>
      <FillBox>
        <Label htmlFor="email">Email Address</Label>
        <Input
          type="text"
          id="email"
          placeholder="e.g. stephenking@lorem.com"
        />
      </FillBox>
      <FillBox>
        <Label htmlFor="phone">Phone Number</Label>
        <Input type="text" id="phone" placeholder="e.g. +1 234 567 890" />
      </FillBox>
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
