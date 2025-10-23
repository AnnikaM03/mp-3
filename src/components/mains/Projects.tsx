import { useState } from "react";
import styled from "styled-components";
import useColorChanger from "./hooks/useColorChanger";
import useTitle from "./hooks/useTitle";
import { StyledMain } from "./Activities";
import { StyledDiv } from "./Education";

const StyledCalculator = styled.section`
    background-color: #ffebd2;
    border: 2px solid #8c4a2f;
    border-radius: 1vw;
    width: 70%;
    margin: 2vh auto;
    padding: 2vh 2vw;
    text-align: center;
    font-family: "Playfair Display", serif;

    h2 {
        color: #8c4a2f;
        font-size: calc(14px + 1vw);
        margin-bottom: 2vh;
    }

    label {
        display: block;
        margin: 1vh 0;
        font-size: calc(12px + 0.8vw);
        color: #8c4a2f;
    }

    input {
        width: 40%;
        padding: 1vh 1vw;
        margin: 1vh;
        border: 2px solid #8c4a2f;
        border-radius: 0.5vw;
        text-align: center;
        font-size: calc(12px + 0.8vw);
        background-color: #fff8f0;
        color: #8c4a2f;
    }

    button {
        background-color: #d98e4b;
        color: white;
        border: 2px solid #8c4a2f;
        border-radius: 0.5vw;
        padding: 1vh 1.5vw;
        margin: 1vh 0.5vw;
        font-size: calc(12px + 0.8vw);
        cursor: pointer;
    }

    #output {
        margin: 2vh auto 0 auto;
        padding: 1.5vh 1vw;
        background-color: #fff8f0;
        border: 2px solid #8c4a2f;
        border-radius: 0.5vw;
        font-size: calc(14px + 1vw);
        font-weight: bold;
        color: #8c4a2f;
        display: block;
        width: 50%;
        text-align: center;
    }

    @media screen and (max-width: 1000px) {
        width: 90%;
    }
`;


export default function Projects() {
    useTitle("Projects | Resume");

    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [output, setOutput] = useState("");
    const outputColor = useColorChanger(output);

    function doAdd() { setOutput(`${Number(one) + Number(two)}`); }
    function doSubtract() { setOutput(`${Number(one) - Number(two)}`); }
    function doMultiply() { setOutput(`${Number(one) * Number(two)}`); }
    function doDivide() {
        if (Number(two) === 0) {
            setOutput("⚠ Division by 0 is not possible");
            return;
        }
        setOutput(`${Number(one) / Number(two)}`);
    }
    function doPower() {
        const base = Number(one);
        const exponent = Number(two);
        let result = 1;
        for (let i = 0; i < exponent; i++) result *= base;
        setOutput(`${result}`);
    }
    function doClear() {
        setOne("");
        setTwo("");
        setOutput("");
    }

    return (
        <StyledMain>
            <h3 id="Project Experience">Project Experience</h3>

            <StyledDiv id="projects">
                <h5>
                    <strong>ML Auto Claims Analysis — Boston University (January 2024 – May 2024)</strong>
                </h5>
                <ul>
                    <li>Analyzed 10,000+ auto insurance records to identify key claim factors using Seaborn and Scikit-learn</li>
                    <li>Led team of 5 through complete data science workflow, delivering actionable insights to stakeholders</li>
                </ul>

                <h5>
                    <strong>Stock Brokerage App — Boston University (December 2024)</strong>
                </h5>
                <ul>
                    <li>Designed database schema for 500+ user profiles and integrated Alpha Vantage API for real-time transactions</li>
                    <li>Executed comprehensive testing using Docker containerization and managed version control via GitHub</li>
                    <li>
                        Repository:{" "}
                        <a href="https://github.com/AnnikaM10/CSFinal" target="_blank" rel="noopener noreferrer">
                            https://github.com/AnnikaM10/CSFinal
                        </a>
                    </li>
                </ul>
            </StyledDiv>

            <StyledCalculator id="calculator">
                <h2>Calculator</h2>

                <label htmlFor="one">Give a number:</label>
                <input type="text" id="one" value={one} onChange={(e) => setOne(e.target.value)} />
                <br />

                <label htmlFor="two">Give a number:</label>
                <input type="text" id="two" value={two} onChange={(e) => setTwo(e.target.value)} />
                <br />

                <button onClick={doAdd}>+</button>
                <button onClick={doSubtract}>-</button>
                <button onClick={doMultiply}>*</button>
                <button onClick={doDivide}>/</button>
                <button onClick={doPower}>^</button>
                <button onClick={doClear}>Clear</button>

                <h2 id="output" style={{ color: outputColor }}>
                    {output}
                </h2>
            </StyledCalculator>
        </StyledMain>
    );
}
