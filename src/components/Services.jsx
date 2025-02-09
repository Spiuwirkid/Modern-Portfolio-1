import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaPaintBrush, FaMobile, FaRocket } from 'react-icons/fa'

const ServicesSection = styled.section`
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

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, 2.5rem);
  text-align: center;
  margin-bottom: 3rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
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

const IconWrapper = styled.div`
  font-size: clamp(2rem, 3vw, 2.5rem);
  color: var(--accent);
  margin-bottom: 1.5rem;
  transition: color 0.3s ease;
`

const ServiceTitle = styled.h3`
  font-size: clamp(1.1rem, 2vw, 1.2rem);
  margin-bottom: 1rem;
  transition: color 0.3s ease;
`

const ServiceDescription = styled.p`
  font-size: clamp(0.875rem, 1.5vw, 1rem);
  color: var(--secondary);
  line-height: 1.6;
  transition: color 0.3s ease;
`

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--accent-gradient);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateY(-10px);
    color: white;

    &::before {
      opacity: 1;
    }

    ${IconWrapper}, ${ServiceTitle}, ${ServiceDescription} {
      color: white;
      position: relative;
      z-index: 2;
    }
  }
`

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Building modern and responsive websites using the latest technologies"
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Creating beautiful and intuitive user interfaces and experiences"
  },
  {
    icon: <FaMobile />,
    title: "Mobile Development",
    description: "Developing cross-platform mobile applications"
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description: "Optimizing applications for maximum speed and efficiency"
  }
]

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <ServicesSection ref={ref}>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My Services
      </Title>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <IconWrapper>{service.icon}</IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  )
}

export default Services
