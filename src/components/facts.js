import styled from '@emotion/styled';
import React from 'react';
import StyledSkewedSection from './skewed-section';
import { StyledH1 } from './_shared/styled-headings';

const StyledLogoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledFactNumber = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 0rem;

  & > .number {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  & > .fact {
    position: relative;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color);
  }
`;

const Facts = () => {
  return (
    <StyledSkewedSection angle={10}>
      <StyledH1>My Creative Process</StyledH1>
      <StyledLogoSection>
        <StyledFactNumber>
          <span className="number">1. Listen</span>
          <span className="fact">
            {
              "Good designers don't talk, they ask questions and listen. During this phase I'm like a detective - speaking to everyone from users to stakeholders to find out everything necessary for a well-informed design."
            }
          </span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">2. Design</span>
          <span className="fact">
            {
              "The design phase is where I translate what I've learned into flows and eventually mockups of the actual product. The designs at this point aren't meant to be perfect - they're meant to be conversation starters."
            }
          </span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">3. Build</span>
          <span className="fact">
            {
              'This is where I put it all together - either creating the product myself or writing user stories for engineering to deliver. I like to focus on delivering work in small chunks and soliciting feedback until the stakeholder is ready to go live. '
            }
          </span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">...and repeat</span>
          <span className="fact">
            {
              "Development doesn't stop once a product goes out. After a product is launched the work begins of monitoring user behavior and soliciting feedback. These learnings are then incorporated into the beginning of another iterative design cycle. "
            }
          </span>
        </StyledFactNumber>
      </StyledLogoSection>
    </StyledSkewedSection>
  );
};

export default Facts;
