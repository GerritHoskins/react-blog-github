import React from 'react'
import styled from 'styled-components'
import {
    FooterContainer,
    FooterWrapper,
    SocialAddy
} from './'
//import SocialAddy from './SocialAddy'
import { config } from "../../config"

const StyledCopyRight = styled.div`
  display: inline-block;  
  font-size: 18px;
  font-weight: 300;
  line-height: 28px;
  font-family: "Quicksand";  
`
export const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <SocialAddy />
                <StyledCopyRight>{config.copyRight}</StyledCopyRight>
            </FooterWrapper>
        </FooterContainer>
    )
}
