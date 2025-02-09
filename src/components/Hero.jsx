import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { AnimatedButton } from './shared/Button'

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px var(--container-padding-desktop);
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);

  @media (max-width: 1024px) {
    padding: 80px var(--container-padding-tablet);
  }

  @media (max-width: 768px) {
    padding: 60px var(--container-padding-mobile);
    flex-direction: column-reverse;
    text-align: center;
    gap: 2rem;
  }
`

const Content = styled.div`
  flex: 1;
  z-index: 1;
  max-width: 600px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;

  img {
    width: 80%;
    max-width: 400px;
    height: auto;
    border-radius: 30px;
    box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
  }

  @media (max-width: 768px) {
    width: 100%;
    
    img {
      width: 60%;
      max-width: 300px;
    }
  }
`

const Title = styled(motion.h1)`
  font-size: clamp(2rem, 5vw, 4rem);
  margin-bottom: 1rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% auto;
  animation: shine 3s linear infinite;

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.5rem);
  margin-bottom: 2rem;
  color: var(--secondary);
`

const StyledButton = styled(AnimatedButton)`
  margin-top: 1rem;
`

const FloatingShape = styled(motion.div)`
  position: absolute;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0.1;

  @media (max-width: 768px) {
    display: none;
  }
`

function Hero() {
  return (
    <HeroSection>
      <FloatingShape
        style={{ top: '20%', left: '10%', width: '50px', height: '50px' }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <FloatingShape
        style={{ bottom: '20%', right: '10%', width: '70px', height: '70px' }}
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Creative Developer & Designer
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Turning ideas into beautiful digital experiences
        </Subtitle>
        <StyledButton
          size="large"
          as={motion.button}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          View Portfolio
        </StyledButton>
      </Content>
      <ImageContainer
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" alt="Profile" />
      </ImageContainer>
    </HeroSection>
  )
}

export default Hero
