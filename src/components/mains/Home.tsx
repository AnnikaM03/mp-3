import styled from "styled-components";
import useTitle from "./hooks/useTitle";
import { StyledMain, StyledHeading } from "./Activities";

export const StyledDiv = styled.div`
  display: block;
`;

export const StyledImg = styled.img`
  max-width: 30%;
  float: left;
  margin: 2vw;
  display: block;
  border: 5px solid #93da97;

  @media screen and (max-width: 1000px) {
    float: none;
    display: block;
    margin: 0 auto;
    text-align: center;
  }
`;

export const StyledP = styled.p`
  background-color: #e8ffd7;
  margin: 3.5vh;
  line-height: 2;
  text-align: left;
  color: #3e5f44;
`;

export default function Home() {
    useTitle("Home | Resume");

    return (
        <StyledMain>
            <StyledHeading id="Home">Home</StyledHeading>

            <StyledDiv id="introduction">
                <StyledImg
                    src="/imgs/annika-profile.jpg"
                    alt="Profile picture of Annika Manjunath"
                />
                <StyledP>
                    My name is Annika Manjunath, and I am a senior at Boston University
                    majoring in Computer Science and minoring in Business Administration.
                    I am an analytical problem solver with experience in machine learning,
                    software development, and data analysis. I am proficient in Python,
                    SQL, and data visualization, with a solid foundation in data
                    structures, algorithms, and database management. I have demonstrated
                    leadership and teamwork through research, consulting projects, and
                    Division 1 athletics. Welcome to my website, here you will find my{" "}
                    <u>
                        <em>
                            <strong>Education</strong>
                        </em>
                    </u>{" "}
                    and{" "}
                    <u>
                        <em>
                            <strong>Employment</strong>
                        </em>
                    </u>{" "}
                    history; as well as other information that may be of interest to you.
                </StyledP>
            </StyledDiv>
        </StyledMain>
    );
}
