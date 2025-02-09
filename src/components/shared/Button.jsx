import styled from 'styled-components'
import { motion } from 'framer-motion'

export const AnimatedButton = styled(motion.button)`
  padding: ${props => props.size === 'large' ? '1rem 2.5rem' : '0.75rem 1.5rem'};
  font-size: ${props => props.size === 'large' ? '1.1rem' : '1rem'};
  color: white;
  border-radius: 30px;
  background: var(--accent-gradient);
  background-size: 200% 200%;
  box-shadow: 0 10px 20px rgba(108, 99, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(108, 99, 255, 0.3);
    background-position: right center;

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px rgba(108, 99, 255, 0.2);
  }
`
