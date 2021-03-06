import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ScrollIndicator from './scroll-indicator';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';
import Particles from 'react-tsparticles';
import ButtonLink from './links/button-link';

const HeroContainer = styled.div`
  min-height: calc(100vh - 2 * var(--header-height));
  position: relative;

  ${mq.gt.sm} {
    min-height: calc(100vh - var(--header-height));
  }
`;

const HeroContents = styled(StyledSection)`
  min-height: calc(100vh - 2 * var(--header-height));
  position: relative;

  ${mq.gt.sm} {
    min-height: calc(100vh - var(--header-height));
  }
`;

const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;
  font-weight: 800;

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  color: hsla(0, 0%, 0%, 0);
  word-break: break-word;
  font-weight: 800;
  -webkit-text-stroke: 2px var(--primary-color);

  ${mq.gt.xs} {
    font-size: 80px;
  }
`;
const StyledDescription = styled.div`
  margin-top: 0.5rem;
  width: 100%;
  max-width: 800px;
  color: white;
  font-size: 20px;
  background-color: hsla(0, 0%, 5%, 0.5);
`;

const Hero = ({ data }) => {
  const { author, tagline, description, ctaLink, ctaLabel } = data;

  return (
    <HeroContainer>
      <Particles
        style={{ position: 'absolute' }}
        options={{
          background: {
            color: {
              value: 'hsla(0,0%,5%,1)',
            },
          },
          fpsLimit: 30,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: 'hsl(38,100%,80%)',
              opacity: 1,
              width: 1,
            },
            links: {
              color: 'hsl(38,100%,50%)',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <HeroContents>
        <StyledAuthor>{author}</StyledAuthor>
        <StyledTagline>{tagline}</StyledTagline>
        <StyledDescription dangerouslySetInnerHTML={{ __html: description }} />
        <ButtonLink label={ctaLabel} link={ctaLink} />
      </HeroContents>

      <ScrollIndicator />
    </HeroContainer>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
