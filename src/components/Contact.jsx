import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'

const ContactSection = styled.section`
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

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  padding: 1.5rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(108, 99, 255, 0.2);
  }
`

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-gradient);
  border-radius: 15px;
  font-size: 1.5rem;
  color: white;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 1.25rem;
  }
`

const InfoContent = styled.div`
  h3 {
    font-size: clamp(1rem, 1.5vw, 1.1rem);
    margin-bottom: 0.25rem;
    color: var(--primary);
  }

  p {
    font-size: clamp(0.875rem, 1.25vw, 1rem);
    color: var(--secondary);
  }
`

const ContactForm = styled(motion.form)`
  background: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
    gap: 1rem;
  }
`

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 10px;
  font-size: clamp(0.875rem, 1.25vw, 1rem);
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(108, 99, 255, 0.1);
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #eee;
  border-radius: 10px;
  font-size: clamp(0.875rem, 1.25vw, 1rem);
  height: 150px;
  outline: none;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 4px rgba(108, 99, 255, 0.1);
  }
`

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: var(--accent-gradient);
  color: white;
  border-radius: 10px;
  font-size: clamp(0.875rem, 1.25vw, 1rem);
  box-shadow: 0 10px 20px rgba(108, 99, 255, 0.2);
`

function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <ContactSection ref={ref}>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </Title>
      <ContactContainer>
        <ContactInfo>
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <IconWrapper><FaEnvelope /></IconWrapper>
            <InfoContent>
              <h3>Email</h3>
              <p>contact@example.com</p>
            </InfoContent>
          </InfoItem>
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <IconWrapper><FaPhone /></IconWrapper>
            <InfoContent>
              <h3>Phone</h3>
              <p>+1 234 567 890</p>
            </InfoContent>
          </InfoItem>
          <InfoItem
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <IconWrapper><FaMapMarkerAlt /></IconWrapper>
            <InfoContent>
              <h3>Location</h3>
              <p>New York, NY</p>
            </InfoContent>
          </InfoItem>
        </ContactInfo>
        <ContactForm
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Input type="text" placeholder="Your Name" />
          <Input type="email" placeholder="Your Email" />
          <Input type="text" placeholder="Subject" />
          <TextArea placeholder="Your Message" />
          <SubmitButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  )
}

export default Contact
