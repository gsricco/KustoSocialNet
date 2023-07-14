import styled from "styled-components";
import {baseTheme} from "@/styles/styledComponents/theme";
import {StyledErrorMsgPropsType, TextAreaPropsType} from "@/common/components/Formik/types";
import {Field} from "formik";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";


//FormikLabel
export const StyledErrorMsg = styled.div<StyledErrorMsgPropsType>`
  width: 100%;
  height: ${(props) => (props.errorShow ? "" : "30px")};

  display: flex;
  justify-content: flex-start;
  align-items: center;

  color: ${baseTheme.colors.danger["500"]};
`;

export const StyledTitle = styled(StyledErrorMsg)`
  color: ${baseTheme.colors.light["900"]};

  & span::first-letter {
    text-transform: uppercase;
  }
`;


//FormikField
export const StyledField = styled(Field)`
  max-width: ${(props) => (props.width ? props.width : "330px")};
  width: 100%;
  height: 36px;
  padding-left: 8px;
  position: relative;

  font-size: 14px;

  outline: none;
  border-radius: 2px;
  border: ${(props) =>
  props.border === "red"
    ? `1px solid ${baseTheme.colors.danger[500]}`
    : `1px solid ${baseTheme.colors.dark[100]}`
};
  background: ${baseTheme.colors.dark[500]};
  color: ${baseTheme.colors.light[100]};
  box-shadow: inset 0 0 0 50px ${baseTheme.colors.dark[500]};
  -webkit-text-fill-color: ${baseTheme.colors.light[900]};

  &::-webkit-calendar-picker-indicator {
    filter: invert(100%);
    background-size: 18px;
    margin: 0 10px 5px 0;
  }


  @media (max-width: 390px) {
    width: 80vw;
    max-width: ${(props) => (props.width ? "40vw" : "330px")};
  }
`;

//Calendar

export const StyledLocalizationProvider= styled(LocalizationProvider)
  `
background: red;
`


export const StyledDemoContainer = styled(DemoContainer)
  `
    // color: white;
     background: ${baseTheme.colors.dark[500]};
    // border: 1px solid white;
  `
export const StyledDatePicker = styled(DatePicker)
  `
    background: ${baseTheme.colors.dark[500]};
    
    & svg{
      fill:white;
    }
  `

//FieldTextarea

export const StyledTextArea = styled.textarea<TextAreaPropsType>`
  max-width: ${(props) => (props.width ? props.width : "330px")};
  width: 100%;
  height: 84px;
  padding-left: 8px;
  position: relative;

  font-size: 14px;

  outline: none;
  border-radius: 2px;
  border: ${(props) =>
  props.border === "red"
    ? `1px solid ${baseTheme.colors.danger[500]}`
    : `1px solid ${baseTheme.colors.dark[100]}`};
  background: ${baseTheme.colors.dark[500]};
  color: ${baseTheme.colors.light[100]};
  box-shadow: inset 0 0 0 50px ${baseTheme.colors.dark[500]};
  -webkit-text-fill-color: ${baseTheme.colors.light[900]};

  &::-webkit-calendar-picker-indicator {
    filter: invert(100%);
    background-size: 18px;
    margin: 0 10px 5px 0;
  }

  @media (max-width: 390px) {
    width: 80vw;
    max-width: ${(props) => (props.width ? "40vw" : "330px")};
  }
`;