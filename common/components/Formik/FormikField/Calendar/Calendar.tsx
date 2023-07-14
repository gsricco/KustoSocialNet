import {useState} from "react";
import dayjs from "dayjs";
import {ThemeProvider} from "@emotion/react";
import {themeFormik} from "@/common/components/Formik/FormikField/Calendar/themeFormik";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {
  StyledDatePicker,
  StyledDemoContainer,
  StyledLocalizationProvider
} from "@/common/components/Formik/Formik.styled";

export const Calendar = () => {
  // const [value, setValue] = useState<Dayjs|null>(dayjs('1981-04-17'));
  const [value, setValue] = useState<unknown>(dayjs('1981-04-17'));

  return (
    <ThemeProvider theme={themeFormik}>
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



