import React from "react";
import useTitle from "./hooks/useTitle";

import {
    StyledMain,
    StyledHeading,
    StyledSubHeading,
} from "./Activities";
import { StyledUl, StyledLi } from "./Certifications";
import {StyledDiv} from "./Education";

export default function Skills() {
    useTitle("Skills | Resume");

    return (
        <StyledMain>
            <StyledHeading id="Skills">Skills</StyledHeading>

            <StyledDiv id="skills">
                <StyledSubHeading>
                    <strong>Technical Skills</strong>
                </StyledSubHeading>
                <StyledUl>
                    <StyledLi>
                        Python, SQL, Java, C, GitHub, NumPy, Agile, API, Docker, Pandas,
                        Jupyter Notebooks, Seaborn, Scikit-learn, MongoDB, Tableau
                    </StyledLi>
                </StyledUl>

                <StyledSubHeading>
                    <strong>Soft Skills</strong>
                </StyledSubHeading>
                <StyledUl>
                    <StyledLi>
                        Communication, Teamwork, Leadership, Problem-Solving, Adaptability,
                        Critical Thinking, Time Management, Creativity, Collaboration,
                        Conflict Resolution, Attention to Detail, Emotional Intelligence,
                        Decision-Making, Work Ethic, Resilience
                    </StyledLi>
                </StyledUl>
            </StyledDiv>
        </StyledMain>
    );
}
