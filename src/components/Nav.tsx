import {Link} from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: #5e936c;
    width: 30%;

    @media screen and (max-width: 1000px) {
        width: 100%;
    }
`;

const StyledUl = styled.ul`
    padding-left: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    font: small-caps 12px "Playfair Display", serif;
    color: #3e5f44;

    @media screen and (max-width: 1000px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const StyledLi = styled.li`
    border: 5px solid #93da97;
    background-color: #e8ffd7;
    padding: 5px;
    margin: 3.5vh;

    @media screen and (max-width: 1000px) {
        margin: 0 auto;
        display: inline;
        flex: 1;
    }

    a {
        text-decoration: none;
        font-size: calc(2px + 2vw);
        color: #3e5f44;
    }
`;

export default function Nav() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><Link to="/">Home</Link></StyledLi>
                <StyledLi><Link to="/education">Education</Link></StyledLi>
                <StyledLi><Link to="/work">Work</Link></StyledLi>
                <StyledLi><Link to="/skills">Skills</Link></StyledLi>
                <StyledLi><Link to="/projects">Project</Link></StyledLi>
                <StyledLi><Link to="/activities">Activities</Link></StyledLi>
                <StyledLi><Link to="/certifications">Certifications</Link></StyledLi>
            </StyledUl>
        </StyledNav>
    );
}
