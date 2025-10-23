import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import Nav from "./Nav.tsx";
import { Route, Routes } from "react-router";
import Home from "./mains/Home.tsx";
import Projects from "./mains/Projects.tsx";
import Education from "./mains/Education.tsx";
import Activities from "./mains/Activities.tsx";
import Certifications from "./mains/Certifications.tsx";
import Skills from "./mains/Skills.tsx";
import Work from "./mains/Work.tsx";
import styled, {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`;
const Wrapper = styled.div`
    width: 100vw;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #e8ffd7; /* Matches main + body background */
`;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    text-align: center;
    flex: 1; 

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
`;

export default function Root() {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Header />
                <Container>
                    <Nav />
                    <Routes>
                        <Route path={`/`} element={<Home />} />
                        <Route path={`/education`} element={<Education />} />
                        <Route path={`/activities`} element={<Activities />} />
                        <Route path={`/work`} element={<Work />} />
                        <Route path={`/skills`} element={<Skills />} />
                        <Route path={`/certifications`} element={<Certifications />} />
                        <Route path={`/projects`} element={<Projects />} />
                    </Routes>
                </Container>
                <Footer />
            </Wrapper>
        </>
    );
}
