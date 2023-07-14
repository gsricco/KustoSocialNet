import {ChangeEvent} from "react";
import {TextAreaPropsType} from "@/common/components/Formik/types";
import {StyledTextArea} from "@/common/components/Formik/Formik.styled";


export const FieldTextarea = (props: TextAreaPropsType) => {
  return (
    <StyledTextArea
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => props.onChange(e)}
      width={props.width}
    >
      {props.textAreaData}
    </StyledTextArea>
  );
};
