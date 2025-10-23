import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #3E5F44;
    color: #E8FFD7;
    font-family: "Playfair Display", serif;
    font-size: calc(2px + 2vw);
    padding: 1vh 0;   /* replaces margins, aligns cleanly */
    margin: 0;
`;


export default function Header() {
    return (
        <StyledHeader>
            <h1>Annika Manjunath</h1>
            <p>My Online Resume</p>
        </StyledHeader>
    );
}
