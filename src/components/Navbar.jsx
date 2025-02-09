import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 var(--container-padding-desktop);
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);

  @media (max-width: 1024px) {
    padding: 0 var(--container-padding-tablet);
  }

  @media (max-width: 768px) {
    padding: 0 var(--container-padding-mobile);
  }
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  z-index: 100;
  text-decoration: none;
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

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`

const NavLink = styled(motion(Link))`
  font-weight: 500;
  position: relative;
  text-decoration: none;
  color: var(--primary);
  padding: 5px 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--accent);
    
    &::after {
      width: 100%;
    }
  }
`

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    padding-top: 100px;
    z-index: 90;
  }
`

const MobileNavLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const MobileNavLink = styled(motion(Link))`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--primary);
  text-decoration: none;
  padding: 10px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background: var(--accent-gradient);
    transition: width 0.3s ease;
  }

  &:hover {
    color: var(--accent);
    
    &::after {
      width: 100%;
    }
  }
`

const HamburgerButton = styled(motion.button)`
  display: none;
  position: relative;
  width: 30px;
  height: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 100;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`

const HamburgerLine = styled(motion.span)`
  width: 100%;
  height: 2px;
  background: var(--accent);
  border-radius: 2px;
`

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  }

  const linkVariants = {
    closed: { x: 50, opacity: 0 },
    open: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1
      }
    })
  }

  return (
    <Nav>
      <Logo to="/">Portfolio</Logo>
      
      <NavLinks>
        <NavLink 
          to="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Home
        </NavLink>
        <NavLink 
          to="/about"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          About
        </NavLink>
        <NavLink 
          to="/portfolio"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </NavLink>
        <NavLink 
          to="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Services
        </NavLink>
        <NavLink 
          to="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </NavLink>
      </NavLinks>

      <HamburgerButton onClick={toggleMenu}>
        <HamburgerLine
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
        <HamburgerLine
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
        <HamburgerLine
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.2 }}
        />
      </HamburgerButton>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <MobileNavLinks>
              {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item, i) => (
                <MobileNavLink
                  key={item}
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </MobileNavLink>
              ))}
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </Nav>
  )
}

export default Navbar
