import styled from "styled-components";
import useTitle from "./hooks/useTitle";
import { StyledMain, StyledHeading } from "./Activities";

export const StyledUl = styled.ul`
  padding: 2vw;
  text-align: left;
  list-style: none;
`;

export const StyledLi = styled.li`
  background-color: #e8ffd7;
  margin: 2vh;
  padding: 1vw;
  border-left: 2px solid #3e5f44;
`;

export default function Certifications() {
    useTitle("Certifications | Resume");

    return (
        <StyledMain>
            <StyledHeading id="Certifications">Certifications</StyledHeading>
            <StyledUl>
                <StyledLi>
                    eCornell Machine Learning Certificate (May 2025 – Present)
                </StyledLi>
                <StyledLi>
                    Forté Career Ready Certificate (June 2024 – August 2024)
                </StyledLi>
                <StyledLi>
                    AWS Cloud Practitioner Certificate (August 2025 - Current)
                </StyledLi>
            </StyledUl>
        </StyledMain>
    );
}
