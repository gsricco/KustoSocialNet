import styled from "styled-components";
import {baseTheme} from "@/styles/styledComponents/theme";

//Header
export const StyledHeader = styled.header
  `
    width: 100%;
    height: 60px;
    padding: 0 4.6%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${baseTheme.colors.dark[700]};
    border-bottom: 1px solid ${baseTheme.colors.dark[300]};
  `;

export const LogoStyle = styled.div
  `
    flex:1 0 auto;
    cursor:pointer;

    font-size: 26px;
    font-family: Inter;
    font-weight: 600;
    line-height: 36px;

    color: ${baseTheme.colors.light[700]};
  `


//SelectLanguage
export const StyledSelectLanguage = styled.select
  `
    width: 163px;
    height: 36px;
    margin-left: 3.7%;

    background: ${baseTheme.colors.dark[700]};
    outline: none;

    color: ${baseTheme.colors.light[100]};

    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    font-family: Inter;
  `

