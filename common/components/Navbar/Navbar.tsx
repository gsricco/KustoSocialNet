import React from 'react';
import styled from 'styled-components';
import {baseTheme} from '@/styles/styledComponents/theme';

export const Navbar = () => {




  return (
    <StyledSidebar>

    </StyledSidebar>
  )
}


const StyledSidebar = styled.div
  `
    position: relative;
    max-width: 220px;
    min-width: 160px;
    height: 660px;
    width: 17vw;
    border-right: 1px solid ${baseTheme.colors.dark[300]};
  `

