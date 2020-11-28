import React from 'react'
import styled from 'styled-components'

import {
    SocialAddyContainer,
    SocialAddyWrapper
} from '.'
import { config } from "../../../config"
import { DevTo, GitHub, LinkedIn, Xing } from "../../Theme/SocialIcons";
//import { HyperLink } from '../../../Components/Markdown/Overrides';

const socialAddies = config.socialIcons;
const SocialAddyLinkStyles = styled.a`  
  padding: 1em;
`

export const SocialAddy = () => {
    return (
        <SocialAddyContainer>
            <SocialAddyWrapper>
                <SocialAddyLinkStyles href={socialAddies.xing} title={socialAddies.xing} ><Xing /></SocialAddyLinkStyles>
                <SocialAddyLinkStyles href={socialAddies.linkedin} title={socialAddies.linkedin}><LinkedIn /></SocialAddyLinkStyles>
                <SocialAddyLinkStyles href={socialAddies.github} title={socialAddies.github}><GitHub /></SocialAddyLinkStyles>
                <SocialAddyLinkStyles href={socialAddies.devto} title={socialAddies.devto}><DevTo /></SocialAddyLinkStyles>
            </SocialAddyWrapper>
        </SocialAddyContainer>
    )
}

export default SocialAddy