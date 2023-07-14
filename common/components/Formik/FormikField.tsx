import {Field} from "formik";
import styled from "styled-components";
import {baseTheme} from "@/styles/styledComponents/theme";
import {ChangeEvent, useState} from "react";
import {FiledProps} from "./types";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {createTheme} from '@mui/material';
import {ThemeProvider} from "@emotion/react";

export const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        formControl:{
          background:'${baseTheme.colors.light[100]}',
          border:`1px solid ${baseTheme.colors.dark[100]}`,
        },
        input: {
          color: `${baseTheme.colors.light[100]}`,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        colorPrimary: {
          fill:'white',
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper:{
          background:'gold',
        }
      }
    },
  }
})

const Calendar = () => {
  // const [value, setValue] = useState<Dayjs|null>(dayjs('1981-04-17'));
  const [value, setValue] = useState<unknown>(dayjs('1981-04-17'));

  return (
    <ThemeProvider theme={theme}>
      <StyledLocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDemoContainer components={['DatePicker']}>
          <StyledDatePicker
            // label="Date of birthday"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            format={'DD/MM/YYYY'}
            minDate={dayjs(new Date(1970, 11, 31))}
            maxDate={dayjs(new Date())}

          />
        </StyledDemoContainer>
      </StyledLocalizationProvider>
    </ThemeProvider>


  )
}

const StyledLocalizationProvider= styled(LocalizationProvider)
`
background: red;
`


const StyledDemoContainer = styled(DemoContainer)
  `
    // color: white;
     background: ${baseTheme.colors.dark[500]};
    // border: 1px solid white;
  `
const StyledDatePicker = styled(DatePicker)
  `
    background: ${baseTheme.colors.dark[500]};
    
    & svg{
      fill:white;
    }
  `




export const FormikField = (props: FiledProps) => {


  return props.type == "textarea" ?
    (
      <FieldTextarea
        {...props}
        onChange={(e) => props.onChange(e.target.value)}
        width={props.width}
      />
    )
    : props.type == "date" ?
      (
        <Calendar/>
      )
      : (
        <StyledField
          {...props}
          onChange={(e: ChangeEvent<HTMLInputElement>) => props.onChange(e.target.value)}
          width={props.width}
        />
      )
};

type TextAreaPropsType = {
  id?: string;
  type?: string;
  border?: string;
  name?: string;
  value?: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  width?: string;
  textAreaData?: string;
};
const FieldTextarea = (props: TextAreaPropsType) => {
  return (
    <StyledTextArea
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => props.onChange(e)}
      width={props.width}
    >
      {props.textAreaData}
    </StyledTextArea>
  );
};

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


const StyledTextArea = styled.textarea<TextAreaPropsType>`
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
