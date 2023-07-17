import {FormikField} from "../FormikField/FormikField";
import React from "react";
import {labelType} from "../types";
import {StyledErrorMsg, StyledInputContainer, StyledLabel, StyledTitle} from "@/common/components/Formik/Formik.styled";

export const FormikLabel = (
  {
    title,
    name,
    border,
    id,
    errors,
    touched,
    type,
    value,
    onChange,
    children,
    width,
    errorShow,
    textAreaData,
    marginBottom
  }: labelType) => {


  return (
    <StyledLabel id={id} withError={!!errors[name] && !!touched[name]} marginBottom={marginBottom}>
      <StyledTitle>
        <span>{title}</span>
      </StyledTitle>
      <StyledInputContainer>
        <FormikField
          name={name}
          border={border}
          type={type}
          value={value}
          onChange={(e) => onChange(e)}
          width={width}
          textAreaData={textAreaData}
        />
        {children}
      </StyledInputContainer>
      {!!errors[name] && touched[name] && (
        <StyledErrorMsg errorShow={errorShow}>{errors[name]}</StyledErrorMsg>
      )}
    </StyledLabel>
  );
};
