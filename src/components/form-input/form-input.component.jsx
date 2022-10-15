import React from "react";
import { FormInputLabel, FormInputUser, Group } from "./form-input.style";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <FormInputUser {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
