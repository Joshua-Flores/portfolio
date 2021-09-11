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
  padding: 1rem;

  & > .number {
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
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
            Good designers don't talk, they ask questions and listen. During this phase I want to find out everything I
            can to help better inform my design decisions.
          </span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">2. Design</span>
          <span className="fact">
            This is where I translate what I've learned into mockups of an actual product. The designs at this point
            aren't meant to be perfect - they're meant to be conversation starters.
          </span>
        </StyledFactNumber>
        <StyledFactNumber>
          <span className="number">3. Build</span>
          <span className="fact">
            This is where I put it all together, delivering work in small chunks and soliciting frequent feedback. This
            process continues until we're ready to pull the trigger and ship.
          </span>
        </StyledFactNumber>
      </StyledLogoSection>
    </StyledSkewedSection>
  );
};

export default Facts;
