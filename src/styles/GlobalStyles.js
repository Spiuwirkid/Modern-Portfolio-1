import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #2A2A2A;
    --secondary: #4A4A4A;
    --accent: #6C63FF;
    --accent-gradient: linear-gradient(135deg, #6C63FF 0%, #FF6CAB 100%);
    --accent-gradient-hover: linear-gradient(135deg, #FF6CAB 0%, #6C63FF 100%);
    --background: #FFFFFF;
    --text: #333333;
    --container-padding-desktop: 100px;
    --container-padding-tablet: 50px;
    --container-padding-mobile: 20px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: var(--text);
    background: var(--background);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: var(--accent-gradient);
    background-size: 200% 200%;
    transition: all 0.3s ease;

    &:hover {
      background-position: right center;
      background-image: var(--accent-gradient-hover);
    }
  }

  .animated-bg {
    background: var(--accent-gradient);
    background-size: 200% 200%;
    animation: gradientShift 15s ease infinite;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`
