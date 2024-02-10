import React from 'react'
import styled from 'styled-components'
import { Container } from './Skills'
import { Title } from './Skills'
import { Description } from './Skills'
import {Wrapper} from './Skills'
import { useState } from 'react'
import ProjectCards from './Cards/ProjectCards'
import { projects } from '../data/constants'

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`

export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`

const CardContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 28px;
flex-wrap: wrap;
// display: grid;
// grid-template-columns: repeat(3, 1fr);
// grid-gap: 32px;
// grid-auto-rows: minmax(100px, auto);
// @media (max-width: 960px) {
//     grid-template-columns: repeat(2, 1fr);
// }
// @media (max-width: 640px) {
//     grid-template-columns: repeat(1, 1fr);
// }
`;

const Projects = ({openModal,setOpenModal}) => {
const [toggle, setToggle] = useState('all');  
  return (
    <Container id = "projects">
        <Wrapper>
        <Title>Projects</Title>
        <Description>
        Text
        </Description>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider />
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>WEB APP'S</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>MOBILE APP'S</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>MOBILE APP'S</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category === toggle)
            .map((project) => (
              <ProjectCards project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
        </Wrapper>
    </Container>
  )
}

export default Projects
