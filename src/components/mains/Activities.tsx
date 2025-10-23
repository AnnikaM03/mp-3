import React from "react";
import useTitle from "./hooks/useTitle";
import styled from "styled-components";


export const StyledMain = styled.main`
  background-color: #e8ffd7;
  width: 70%;
    padding: 2vw;
  font: calc(2px + 2vw) "Playfair Display", serif;
  color: #3e5f44;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const StyledHeading = styled.h3`
  margin: 3vh;
  font: calc(2px + 2.5vw) "Playfair Display", serif;
  color: #3e5f44;
`;

const ActivitiesSection = styled.div`
  text-align: left;
`;

export const StyledSubHeading = styled.h5`
  font-size: calc(1px + 2vw);
`;

const ActivityList = styled.ul`
  padding: 2vw;
  list-style: none;
`;

const ActivityItem = styled.li`
  background-color: #e8ffd7;
  margin: 2vh;
  padding: 1vw;
  border-left: 2px solid #3e5f44;
`;
export default function Activities(){
    useTitle("Activities | Resume");
    return (

        <StyledMain>
            <StyledHeading id="Activities and Interests">Activities and Interests</StyledHeading>
            <ActivitiesSection id="activities">
                <StyledSubHeading><strong>Break Through Tech Fellow(May 2025 – Present)</strong></StyledSubHeading>
                <ActivityList>
                    <ActivityItem>Selected from 3000+ applicants for 12-month AI/ML program with technical coursework and industry partnerships</ActivityItem>
                </ActivityList>
                <StyledSubHeading><strong>Student-Athlete Advisory Committee</strong></StyledSubHeading>
                <ActivityList>
                    <ActivityItem>Women's Golf Representative and Mentor</ActivityItem>
                </ActivityList>
                <StyledSubHeading><strong>Active Member</strong></StyledSubHeading>
                <ActivityList>
                    <ActivityItem>BU Consulting Group, Girls Who Code, Forté Foundation</ActivityItem>
                </ActivityList>
                <StyledSubHeading><strong>Hackathons</strong></StyledSubHeading>
                <ActivityList>
                    <ActivityItem>
                        Boston University & The Ohio State University
                    </ActivityItem>
                </ActivityList>
            </ActivitiesSection>
        </StyledMain>

    )
}
