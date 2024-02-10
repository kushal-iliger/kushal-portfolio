import { Container } from './Skills'
import React from 'react'
import { Title } from './Skills'
import { Description } from './Skills'
import {Wrapper} from './Skills'
import styled from 'styled-components'
import { Timeline } from '@mui/icons-material'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { experiences } from '../data/constants';
import ExperienceCard from './Cards/ExperienceCard'
import '../App.css'

const TimeLineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;

const Experience = () => {
  return (
    <Container id ="experience">
      <Wrapper>
        <Title>
            Experience
        </Title>
        <Description>Here is my professional experience</Description>
        <TimeLineSection>
            <Timeline>
            {experiences.map((experience,index) => (
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== experiences.length - 1 && <TimelineConnector style={{ background: '#854CE6' }} />}
                                </TimelineSeparator>
                                <TimelineContent sx={{ py: '12px', px: 2 }}>
                                   <ExperienceCard experience={experience}/>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
            </Timeline>
        </TimeLineSection>
      </Wrapper>
    </Container>
  )
}

export default Experience

