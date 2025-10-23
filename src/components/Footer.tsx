import styled from "styled-components";
import { Link } from "react-router";


export const StyledFooter = styled.footer`
    background-color: #3E5F44;
    color: #E8FFD7;
    font-family: "Playfair Display", serif;
    font-size: calc(2px + 2vw);
`;


export default function Footer() {
    return (
        <StyledFooter>
            <p>
                All rights reserved by Annika Manjunath:{" "}
                <Link to="/credits">Credits</Link> &#169;
            </p>
        </StyledFooter>
    );
}
