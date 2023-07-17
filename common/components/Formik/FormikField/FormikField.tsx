import {ChangeEvent} from "react";
import {FiledProps} from "../types";
import {Calendar} from "@/common/components/Formik/FormikField/Calendar/Calendar";
import {FieldTextarea} from "@/common/components/Formik/FormikField/FieldTextarea/FieldTextarea";
import {StyledField} from "@/common/components/Formik/Formik.styled";


export const FormikField = (props: FiledProps) => {

  return props.type === "textarea"
    ? <FieldTextarea
        {...props}
        onChange={(e) => props.onChange(e.target.value)}
        width={props.width}
      />
    : props.type === "date"
      ? <Calendar/>
      : <StyledField
          {...props}
          onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
          width={props.width}
        />
};





