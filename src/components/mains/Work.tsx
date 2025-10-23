import useTitle from "./hooks/useTitle";
import {
    StyledMain,
    StyledHeading,
    StyledSubHeading,
} from "./Activities";
import { StyledUl, StyledLi } from "./Certifications";
import { StyledDiv } from "./Education";

export default function Work() {
    useTitle("Work | Resume");

    return (
        <StyledMain>
            <StyledHeading id="Work Experience">Work Experience</StyledHeading>

            <StyledDiv id="work">
                <StyledSubHeading>
                    <strong>Developer Intern — EmpowerID (May 2025 – Present)</strong>
                </StyledSubHeading>
                <StyledUl>
                    <StyledLi>
                        Implemented APIs for Siemens client project, exposing backend data
                        to microservices and creating UI endpoints
                    </StyledLi>
                    <StyledLi>
                        Authored technical documentation, created JIRA epics, and wrote
                        stored procedures and database queries in SQL
                    </StyledLi>
                    <StyledLi>
                        Participated in client demos, sprint planning, and daily stand-ups
                        following Agile methodology
                    </StyledLi>
                </StyledUl>

                <StyledSubHeading>
                    <strong>Research Assistant — Ohio State University (July 2024 – Present)</strong>
                </StyledSubHeading>
                <StyledUl>
                    <StyledLi>
                        Analyzed microscopic images to enhance pancreatic cancer detection
                        accuracy
                    </StyledLi>
                </StyledUl>
            </StyledDiv>
        </StyledMain>
    );
}
