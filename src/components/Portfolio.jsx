import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PortfolioSection = styled.section`
  min-height: 100vh;
  padding: 100px var(--container-padding-desktop);
  background: #f8f9fa;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 80px var(--container-padding-tablet);
  }

  @media (max-width: 768px) {
    padding: 60px var(--container-padding-mobile);
  }
`

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`

const Project = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(108, 99, 255, 0.2);
  }
`

const ProjectImage = styled.div`
  position: relative;
  padding-top: 60%; // 16:9 aspect ratio
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`

const ProjectContent = styled.div`
  padding: 1.5rem;
`

const ProjectTitle = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  margin-bottom: 0.5rem;
  color: var(--primary);
`

const ProjectDescription = styled.p`
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: var(--secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`

const ProjectLink = styled(motion.a)`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background: var(--accent-gradient);
  color: white;
  border-radius: 25px;
  font-size: clamp(0.875rem, 1.5vw, 0.9rem);
  box-shadow: 0 5px 15px rgba(108, 99, 255, 0.2);
`

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform built with React and Node.js",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "A creative portfolio website with smooth animations",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    link: "#"
  },
  {
    title: "Mobile App",
    description: "A cross-platform mobile app built with React Native",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    link: "#"
  }
]

function Portfolio() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <PortfolioSection ref={ref}>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Portfolio
      </Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <Project
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <ProjectImage>
              <img src={project.image} alt={project.title} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectLink
                href={project.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </ProjectLink>
            </ProjectContent>
          </Project>
        ))}
      </ProjectsGrid>
    </PortfolioSection>
  )
}

export default Portfolio
