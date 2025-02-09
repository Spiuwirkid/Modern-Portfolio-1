import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px var(--container-padding-desktop);
  background: #fff;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 80px var(--container-padding-tablet);
  }

  @media (max-width: 768px) {
    padding: 60px var(--container-padding-mobile);
  }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`

const ImageContainer = styled(motion.div)`
  flex: 1;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--accent);
    border-radius: 20px;
    z-index: 1;

    @media (max-width: 768px) {
      top: -10px;
      left: -10px;
    }
  }

  img {
    width: 100%;
    height: auto;
    max-height: 500px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: 20px 20px 60px rgba(0,0,0,0.1);
    position: relative;
    z-index: 2;
  }
`

const Content = styled.div`
  flex: 1;
  z-index: 2;

  @media (max-width: 768px) {
    text-align: center;
  }
`

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1.5rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Description = styled(motion.p)`
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.8;
  color: var(--secondary);
  margin-bottom: 2rem;
`

const SkillsContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Skill = styled(motion.div)`
  padding: 1rem;
  background: rgba(108, 99, 255, 0.1);
  border-radius: 10px;
  text-align: center;
  font-weight: 500;
  color: var(--accent);
  transition: all 0.3s ease;

  &:hover {
    background: var(--accent);
    color: white;
    transform: translateY(-5px);
  }
`

function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  return (
    <AboutSection ref={ref}>
      <Container>
        <ImageContainer
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <img src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4" alt="About Me" />
        </ImageContainer>
        <Content>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            About Me
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I'm a passionate developer and designer with over 5 years of experience in creating beautiful digital experiences. I specialize in building modern web applications that combine aesthetic design with efficient functionality.
          </Description>
          <SkillsContainer
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Skill whileHover={{ scale: 1.05 }}>React</Skill>
            <Skill whileHover={{ scale: 1.05 }}>Node.js</Skill>
            <Skill whileHover={{ scale: 1.05 }}>UI/UX Design</Skill>
            <Skill whileHover={{ scale: 1.05 }}>TypeScript</Skill>
          </SkillsContainer>
        </Content>
      </Container>
    </AboutSection>
  )
}

export default About
