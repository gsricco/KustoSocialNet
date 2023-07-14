import {createTheme} from "@mui/material";
import {baseTheme} from "@/styles/styledComponents/theme";

export const themeFormik = createTheme({
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