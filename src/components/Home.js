import React, { Component } from 'react'
import styled from 'styled-components'
import ResponsiveFonts from './responsive-fonts'
import { Breakpoint } from './make-responsive-component'
import folhaesquerda from '../assets/FolhaEsquerda.png'

import {
  MediumAndUp,
  LargeAndUp,
  SmallAndDown,
  MediumAndDown,
  MediumOnly,
} from './breakpoints.jsx'

const Wrapper = styled.section`
  
  background: white;
  text-align: center;
  width: 100%;
  height: 90vh;
  overflow: hidden;
`
const FrameText = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;
const Container = styled.div `
display: flex;
align-items: center;
justify-content: center; /* Center children */
background-color: white;
position: relative;


`;
const FrameImage = styled.div`
`;
const ResponsiveImage = styled.img`
  width: 100%; // Default to full width
  height: auto; // Maintain aspect ratio

  @media (max-width: 768px) {
    max-width: 75%; // Smaller screens
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 85%; // Medium screens
  }

  @media (min-width: 1025px) {
    max-width: 95%; // Larger screens
  }
`;
const ResponsiveFolha = styled.img`
  width: 25%; // Default to full width
  height: auto; // Maintain aspect ratio
  position: absolute;
  z-index: 1000;

  @media (max-width: 768px) {
    max-width: 10%; // Smaller screens
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 15%; // Medium screens
  }

  @media (min-width: 1025px) {
    max-width: 20%; // Larger screens
  }
`;

export default class Home extends Component {
  render() {
    const { slideIndex } = this.props; // Extract slideIndex from props

    return (
      <Wrapper>
        <ResponsiveFonts>

          <MediumAndDown>
          <Container>
              <FrameText>
              <h1>Responsive Fonts</h1>
              <p>Resize the window to see the magic happen!</p>
              </FrameText>
              <FrameImage>
                <ResponsiveImage src="https://placekitten.com/400/400" alt="kitten" />
              </FrameImage>
            </Container>
          </MediumAndDown>

         

            <LargeAndUp>
            <Container>
            <ResponsiveFolha
                style={{
                  left: `${slideIndex * 10}px`, // Dynamically adjust the left position
                  bottom: `${-200 + slideIndex * 5}px` // Dynamically adjust the bottom position
                }}
                src={folhaesquerda}
              />
                <FrameText>
                <h1>Responsive Fonts</h1>
                <p>Resize the window to see the magic happen!</p>
                </FrameText>
                <FrameImage>
                  <ResponsiveImage src="https://placekitten.com/400/400" alt="kitten" />
                </FrameImage>
              </Container>
            </LargeAndUp>

          </ResponsiveFonts>
      </Wrapper>
    )
  }
}
