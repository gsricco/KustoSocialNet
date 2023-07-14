import styled from "styled-components";
import {baseTheme} from "@/styles/styledComponents/theme";


//Layout
export const StyledWrapper = styled.div
  ` width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${baseTheme.colors.dark['700']};
    color: ${baseTheme.colors.light[100]};  `

export const MainLayout = styled.div
  `
    //overflow: hidden;                          //уточнить
  `

//PageLayout
export const StyledWrapperPage = styled.div
  ` width: 100%;
    min-height: 100vh;

    background: ${baseTheme.colors.dark['700']};
    color: ${baseTheme.colors.light[100]};
  `

export const PagePageLayout = styled.div
  `
    display: flex;
    max-width: 1310px;
    width: 100%;
    gap: 24px;
    
    padding: 0 15px;
    margin: auto;
  `

export const MainPageLayout = styled.div
  `
  padding-top: 36px;
  flex-grow: 1;
`

//SettingsLayout
export const PageSettings = styled.div
  `
  max-width: 1310px;
  width: 100%;
  padding: 0 15px;
  margin: auto;
`
