import React from "react";
import styled from "styled-components";
import useTitle from "./hooks/useTitle";
import {
    StyledMain,
    StyledHeading,
    StyledSubHeading,
} from "./Activities";
import { StyledUl, StyledLi } from "./Certifications";

export const StyledDiv = styled.div`
  text-align: left;
`;

export default function Education() {
    useTitle("Education | Resume");

    return (
        <StyledMain>
            <StyledHeading id="Education">Education</StyledHeading>

            <StyledDiv id="undergraduate">
                <StyledSubHeading>
                    <strong>Boston University — Boston, MA</strong>
                </StyledSubHeading>

                <StyledUl>
                    <StyledLi>B.A. in Computer Science</StyledLi>
                    <StyledLi>Minor: Business Administration, Data Science</StyledLi>
                    <StyledLi>Overall GPA: 3.81 (4.00 scale)</StyledLi>
                    <StyledLi>Expected Graduation: May 2026</StyledLi>
                    <StyledLi>Honors: Dean's List, Division 1 Women's Golf</StyledLi>
                </StyledUl>
            </StyledDiv>
        </StyledMain>
    );
}
