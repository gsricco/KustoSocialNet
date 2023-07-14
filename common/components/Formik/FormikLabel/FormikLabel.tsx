import {FormikField} from "../FormikField/FormikField";
import React from "react";
import {labelType} from "../types";
import {StyledErrorMsg, StyledTitle} from "@/common/components/Formik/Formik.styled";

export const FormikLabel = ({
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
  textAreaData
}: labelType) => {
  let errorMessage = "";

  if (name === "username")
    errors.username && touched.username ? (errorMessage = errors.username) : "";
  if (name === "email") errors.email && touched.email ? (errorMessage = errors.email) : "";
  if (name === "password")
    errors.password && touched.password ? (errorMessage = errors.password) : "";
  if (name === "passwordConfirmation")
    errors.passwordConfirmation && touched.passwordConfirmation
      ? (errorMessage = errors.passwordConfirmation)
      : "";
  if (name === "loginOrEmail")
    errors.loginOrEmail && touched.loginOrEmail ? (errorMessage = errors.loginOrEmail) : "";
  if (name === "newPassword")
    errors.newPassword && touched.newPassword ? (errorMessage = errors.newPassword) : "";
  if (name === "newPassword")
    errors.newPassword && touched.newPassword ? (errorMessage = errors.newPassword) : "";
  if (name === "aboutMe") errors.aboutMe && touched.aboutMe ? (errorMessage = errors.aboutMe) : "";
  if (name === "recoveryCode")
    errors.recoveryCode && touched.recoveryCode ? (errorMessage = errors.recoveryCode) : "";
  if (name === "firstname")
    errors.firstname && touched.firstname ? (errorMessage = errors.firstname) : "";
  if (name === "lastname")
    errors.lastname && touched.lastname ? (errorMessage = errors.lastname) : "";
  if (name === "birthday")
    errors.birthday && touched.birthday ? (errorMessage = errors.birthday) : "";
  if (name === "city") errors.city && touched.city ? (errorMessage = errors.city) : "";

  return (
    <label id={id}>
      <StyledTitle>
        <span>{title}</span>
      </StyledTitle>
      <FormikField
        name={name}
        border={border}
        type={type}
        value={value}
        onChange={(e) => onChange(e)}
        width={width}
        textAreaData={textAreaData}
      />
      {errorMessage && <StyledErrorMsg errorShow={errorShow}>{errorMessage}</StyledErrorMsg>}
      {children}
    </label>
  );
};
